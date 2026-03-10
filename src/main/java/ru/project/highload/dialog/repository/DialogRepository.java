package ru.project.highload.dialog.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;
import ru.project.highload.dialog.domain.Message;

import java.util.List;
import java.util.UUID;

@Repository
@RequiredArgsConstructor
public class DialogRepository {

    private final JdbcClient jdbcClient;

    public List<Message> findAllMessagesBetween(UUID firstUser, UUID secondUser) {
        return jdbcClient.sql("""
                        SELECT sender_id, recipient_id, message_text
                        FROM dialog_messages
                        WHERE (sender_id = :first AND recipient_id = :second)
                           OR (sender_id = :second AND recipient_id = :first)
                        ORDER BY created_at ASC
                        """)
                .param("first", firstUser)
                .param("second", secondUser)
                .query(Message.class)
                .list();
    }

    public void saveMessage(UUID from, UUID to, String text) {
        jdbcClient.sql("""
                        INSERT INTO dialog_messages (sender_id, recipient_id, message_text)
                        VALUES (:sender_id, :recipient_id, :message_text)
                        """)
                .param("sender_id", from)
                .param("recipient_id", to)
                .param("message_text", text)
                .update();
    }
}
