package ru.project.highload.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.openapi.api.UserApi;
import ru.project.highload.openapi.dto.User;
import ru.project.highload.openapi.dto.UserRegisterPost200Response;
import ru.project.highload.openapi.dto.UserRegisterPostRequest;
import ru.project.highload.user.mapper.UserMapper;
import ru.project.highload.user.service.UserService;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
public class UserController implements UserApi {

    private final UserMapper mapper;
    private final UserService service;

    @Override
    public ResponseEntity<User> userGetIdGet(String id) {
        return ResponseEntity.ok(mapper.toDto(service.findById(UUID.fromString(id))));
    }

    @Override
    public ResponseEntity<UserRegisterPost200Response> userRegisterPost(UserRegisterPostRequest userRegisterPostRequest) {
        UUID userId = service.create(mapper.toEntity(userRegisterPostRequest));
        return ResponseEntity.ok(mapper.userIdToDto(userId));
    }

    @Override
    public ResponseEntity<List<User>> userSearchGet(String firstName, String lastName) {
        return ResponseEntity.ok(mapper.toListDto(service.search(firstName, lastName)));
    }
}
