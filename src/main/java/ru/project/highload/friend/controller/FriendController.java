package ru.project.highload.friend.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.friend.service.FriendService;
import ru.project.highload.openapi.api.FriendApi;
import ru.project.highload.utils.SecurityUtils;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class FriendController implements FriendApi {

    private final FriendService service;

    @Override
    public ResponseEntity<Void> friendDeleteUserIdPut(String userId) {
        service.deleteFriend(SecurityUtils.getCurrentUserId(), UUID.fromString(userId));
        return ResponseEntity.ok().build();
    }

    @Override
    public ResponseEntity<Void> friendSetUserIdPut(String userId) {
        service.addFriend(SecurityUtils.getCurrentUserId(), UUID.fromString(userId));
        return ResponseEntity.ok().build();
    }
}
