package ru.project.highload.friend.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.project.highload.friend.repository.FriendRepository;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FriendService {

    private final FriendRepository repository;

    public void addFriend(UUID userId, UUID friendId) {
        repository.save(userId, friendId);
    }

    public void deleteFriend(UUID userId, UUID friendId) {
        repository.delete(userId, friendId);
    }
}
