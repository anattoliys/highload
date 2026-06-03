package ru.project.highload.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.project.highload.domain.SagaStateEntity;

import java.util.UUID;

@Repository
public interface SagaStateRepository extends JpaRepository<SagaStateEntity, UUID> {

    boolean existsBySagaId(UUID sagaId);
}
