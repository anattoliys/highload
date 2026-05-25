package ru.project.highload.domain;

import com.fasterxml.jackson.annotation.JsonProperty;

public record CounterResponseDto(
        @JsonProperty("userId") String userId,
        @JsonProperty("unreadCount") long unreadCount
) {
}
