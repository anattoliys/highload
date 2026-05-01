package ru.project.highload.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.project.highload.client.UserClient;
import ru.project.highload.domain.LoginRequest;
import ru.project.highload.domain.LoginResponse;
import ru.project.highload.domain.User;
import ru.project.highload.security.JwtUtils;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserClient userClient;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public LoginResponse generateToken(LoginRequest request) {
        UUID userId = UUID.fromString(request.getId());
        User user = userClient.findById(userId);

        boolean isPasswordMatch = passwordEncoder.matches(request.getPassword(), user.getPassword());
        if (!isPasswordMatch) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED);
        }

        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setToken(jwtUtils.generateToken(userId.toString()));
        return loginResponse;
    }
}
