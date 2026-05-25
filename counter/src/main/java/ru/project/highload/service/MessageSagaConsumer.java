package ru.project.highload.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;
import ru.project.highload.domain.MessageDecrementDto;
import ru.project.highload.domain.MessageIncrementDto;

@Component
@Slf4j
@RequiredArgsConstructor
public class MessageSagaConsumer {

    private final CounterService counterService;

    @KafkaListener(
            topics = "${spring.kafka.topics.message-create}",
            groupId = "${spring.kafka.consumer.group-id}",
            properties = "spring.json.value.default.type=ru.project.highload.domain.MessageIncrementDto"
    )
    public void handleMessageCreate(MessageIncrementDto event) {
        counterService.processIncrementSaga(event);
    }

    @KafkaListener(
            topics = "${spring.kafka.topics.message-rollback}",
            groupId = "${spring.kafka.consumer.group-id}",
            properties = "spring.json.value.default.type=ru.project.highload.domain.MessageDecrementDto"
    )
    public void handleMessageRollback(MessageDecrementDto event) {
        counterService.processDecrementCompensation(event);
    }
}
