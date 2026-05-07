package ru.project.highload.post.domain;

import lombok.Data;

import java.time.Instant;
import java.util.UUID;

@Data
public class Post {
    private UUID id;
    private UUID authorId;
    private String text;
    private Instant createdAt;
    private Instant updatedAt;
}
