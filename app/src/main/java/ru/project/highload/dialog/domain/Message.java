package ru.project.highload.dialog.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
public class Message {

    private UUID from;
    private UUID to;
    private String text;
}
