package ru.project.highload.user.domain;

import lombok.Data;

import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Data
public class User {
    private UUID id;
    private String firstName;
    private String secondName;
    private LocalDate birthdate;
    private Sex sex;
    private String biography;
    private String city;
    private String password;
    private Instant createdAt;
    private Instant updatedAt;
}
