package ru.project.highload.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.project.highload.user.domain.User;
import ru.project.highload.user.repository.UserRepository;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public UUID create(User user) {
        return repository.save(user);
    }
}
