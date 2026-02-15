package ru.project.highload.user.service;

import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.project.highload.user.domain.User;
import ru.project.highload.user.repository.UserRepository;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private final Counter userCreatedCounter;
    private final UserRepository repository;

    public UserService(MeterRegistry registry, UserRepository repository) {
        this.userCreatedCounter = Counter.builder("users.created.count")
                .description("Количество созданных пользователей")
                .register(registry);
        this.repository = repository;
    }

    public UUID create(User user) {
        UUID id = repository.save(user);
        userCreatedCounter.increment();
        return id;
    }

    @Transactional(readOnly = true)
    public User findById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found by id " + id));
    }

    @Transactional(readOnly = true)
    public List<User> search(String firstName, String lastName) {
        return repository.searchUsers(firstName, lastName);
    }
}
