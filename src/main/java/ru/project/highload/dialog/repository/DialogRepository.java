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

    public List<Message> findAllByDialogId(UUID currentUser, UUID dialogId) {
        return jdbcClient.sql("""
                        SELECT id, dialog_id, sender_id, recipient_id, message_text, is_read, created_at, updated_at
                        FROM dialog_messages
                        WHERE dialog_id = :dialogId
                        ORDER BY
                            (recipient_id = :current AND is_read = FALSE) DESC,
                            created_at DESC
                        """)
                .param("current", currentUser)
                .param("dialogId", dialogId)
                .query(Message.class)
                .list();
    }

    public List<Message> findAll() {
        return jdbcClient.sql("""
                        SELECT id, dialog_id, sender_id, recipient_id, message_text, is_read, created_at, updated_at
                        FROM dialog_messages
                        """)
                .query(Message.class)
                .list();
    }

    public void saveMessage(UUID from, UUID to, String text, UUID dialogId) {
        jdbcClient.sql("""
                        INSERT INTO dialog_messages (sender_id, recipient_id, message_text, dialog_id)
                        VALUES (:senderId, :recipientId, :messageText, :dialogId)
                        """)
                .param("senderId", from)
                .param("recipientId", to)
                .param("messageText", text)
                .param("dialogId", dialogId)
                .update();
    }
}
