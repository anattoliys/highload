package ru.project.highload.user.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import ru.project.highload.openapi.api.LoginApi;
import ru.project.highload.openapi.dto.LoginPost200Response;
import ru.project.highload.openapi.dto.LoginPostRequest;
import ru.project.highload.user.domain.LoginResponse;
import ru.project.highload.user.mapper.AuthMapper;
import ru.project.highload.user.service.AuthService;

@RestController
@RequiredArgsConstructor
public class AuthController implements LoginApi {

    private final AuthMapper mapper;
    private final AuthService service;

    @Override
    public ResponseEntity<LoginPost200Response> loginPost(LoginPostRequest loginPostRequest) {
        LoginResponse loginResponse = service.generateToken(mapper.toEntity(loginPostRequest));
        return ResponseEntity.ok(mapper.toDto(loginResponse));
    }
}
