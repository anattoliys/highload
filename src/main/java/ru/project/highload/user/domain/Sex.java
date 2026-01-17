package ru.project.highload.user.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Sex {
    MALE("MALE"),
    FEMALE("FEMALE");

    private final String value;
}
