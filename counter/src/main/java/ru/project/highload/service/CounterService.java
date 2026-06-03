package ru.project.highload.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.project.highload.domain.MessageDecrementDto;
import ru.project.highload.domain.MessageIncrementDto;
import ru.project.highload.domain.SagaStateEntity;
import ru.project.highload.domain.SagaStatus;
import ru.project.highload.repository.SagaStateRepository;

@Service
@RequiredArgsConstructor
@Slf4j
public class CounterService {

    private final StringRedisTemplate redisTemplate;
    private final SagaStateRepository sagaStateRepository;

    private static final String COUNTER_KEY_PREFIX = "unread:messages:user:";

    public long getUnreadCount(String userId) {
        String value = redisTemplate.opsForValue().get(COUNTER_KEY_PREFIX + userId);
        return value != null ? Long.parseLong(value) : 0L;
    }

    @Transactional
    public void processIncrementSaga(MessageIncrementDto message) {
        if (sagaStateRepository.existsBySagaId(message.getSagaId())) {
            log.warn("Saga ID {} already processed", message.getSagaId());
            return;
        }

        String redisKey = COUNTER_KEY_PREFIX + message.getRecipientId();
        redisTemplate.opsForValue().increment(redisKey);

        SagaStateEntity sagaState = SagaStateEntity.builder()
                .sagaId(message.getSagaId())
                .recipientId(message.getRecipientId())
                .status(SagaStatus.SUCCESS)
                .build();

        sagaStateRepository.save(sagaState);
    }

    @Transactional
    public void processDecrementCompensation(MessageDecrementDto message) {
        SagaStateEntity originalSaga = sagaStateRepository.findById(message.getSagaId()).orElse(null);

        if (originalSaga == null) {
            log.info("Saga ID {} not found", message.getSagaId());
            return;
        }

        if (originalSaga.getStatus() == SagaStatus.COMPENSATED) {
            log.warn("Saga ID {} already compensated", message.getSagaId());
            return;
        }

        String redisKey = COUNTER_KEY_PREFIX + message.getRecipientId();
        Long currentValue = redisTemplate.opsForValue().decrement(redisKey);
        if (currentValue != null && currentValue < 0) {
            log.warn("Counter for user {} went negative ({})", message.getRecipientId(), currentValue);
            redisTemplate.opsForValue().set(redisKey, "0");
        }

        originalSaga.setStatus(SagaStatus.COMPENSATED);
        sagaStateRepository.save(originalSaga);
    }
}
