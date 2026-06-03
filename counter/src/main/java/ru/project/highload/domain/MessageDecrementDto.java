package ru.project.highload.domain;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MessageDecrementDto {

    @NotNull(message = "Saga ID is required")
    private UUID sagaId;

    @NotBlank(message = "Recipient ID is required")
    private String recipientId;

    private String reason;
}
