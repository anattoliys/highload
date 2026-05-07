package ru.project.highload.dialog.domain;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Builder
@Data
public class Message {

    private UUID id;
    private UUID dialogId;
    private UUID senderId;
    private UUID recipientId;
    private String messageText;
    private Boolean isRead;
    private Instant createdAt;
    private Instant updatedAt;
}
