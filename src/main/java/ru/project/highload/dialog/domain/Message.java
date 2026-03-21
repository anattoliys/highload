package ru.project.highload.dialog.domain;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class Message {

    private UUID id;
    private UUID senderId;
    private UUID recipientId;
    private String messageText;
    private Instant createdAt;
    private Instant updatedAt;
}
