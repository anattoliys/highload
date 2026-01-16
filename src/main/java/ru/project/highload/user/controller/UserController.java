package ru.project.highload.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.openapi.api.UserApi;
import ru.project.highload.openapi.dto.User;
import ru.project.highload.openapi.dto.UserRegisterPost200Response;
import ru.project.highload.openapi.dto.UserRegisterPostRequest;

import java.util.List;

@RestController
public class UserController implements UserApi {
    @Override
    public ResponseEntity<User> userGetIdGet(String id) {
        return null;
    }

    @Override
    public ResponseEntity<UserRegisterPost200Response> userRegisterPost(UserRegisterPostRequest userRegisterPostRequest) {
        return null;
    }

    @Override
    public ResponseEntity<List<User>> userSearchGet(String firstName, String lastName) {
        return null;
    }
}
