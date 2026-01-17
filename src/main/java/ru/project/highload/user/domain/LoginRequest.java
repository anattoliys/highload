package ru.project.highload.user.domain;

import lombok.Data;

@Data
public class LoginRequest {

    private String id;
    private String password;
}
