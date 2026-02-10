package ru.project.highload.user.service;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.project.highload.user.domain.User;
import ru.project.highload.user.repository.UserRepository;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public UUID create(User user) {
        return repository.save(user);
    }

    public User findById(UUID id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundException("User not found by id " + id));
    }

    public List<User> search(String firstName, String lastName) {
        return repository.searchUsers(firstName, lastName);
    }
}
