CREATE TABLE IF NOT EXISTS dialog_messages (
    id           UUID DEFAULT uuid_generate_v4(),
    dialog_id    UUID NOT NULL,
    sender_id    UUID NOT NULL,
    recipient_id UUID NOT NULL,
    message_text TEXT NOT NULL,
    is_read      BOOLEAN DEFAULT FALSE,
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP,
    PRIMARY KEY (dialog_id, id)
);
