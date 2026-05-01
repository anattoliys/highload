package ru.project.highload.user.domain;

import java.util.UUID;

public record UserAuthDto(UUID id, String password) {
}
