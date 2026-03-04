package ru.project.highload.friend.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class FriendRepository {

    private final JdbcClient jdbcClient;

    public void save(UUID userId, UUID friendId) {
        jdbcClient.sql("""
                        INSERT INTO friends (user_id, friend_id)
                        VALUES (:userId, :friendId)
                        """)
                .param("userId", userId)
                .param("friendId", friendId)
                .update();
    }

    public void delete(UUID userId, UUID friendId) {
        jdbcClient.sql("""
                DELETE FROM friends 
                WHERE user_id = :userId AND friend_id = :friendId
                """)
                .param("userId", userId)
                .param("friendId", friendId)
                .update();
    }
}
