package ru.project.highload.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "saga_states")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SagaStateEntity {

    @Id
    @Column(name = "saga_id", updatable = false, nullable = false)
    private UUID sagaId;

    @Column(name = "recipient_id", nullable = false)
    private String recipientId;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false, length = 20)
    private SagaStatus status;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false, nullable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;
}
