package ru.project.highload.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.openapi.api.LoginApi;
import ru.project.highload.openapi.dto.LoginPost200Response;
import ru.project.highload.openapi.dto.LoginPostRequest;

@RestController
public class AuthController implements LoginApi {
    @Override
    public ResponseEntity<LoginPost200Response> loginPost(LoginPostRequest loginPostRequest) {
        return null;
    }
}
