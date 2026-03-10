CREATE TABLE IF NOT EXISTS dialog_messages (
    id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sender_id    UUID NOT NULL,
    recipient_id UUID NOT NULL,
    message_text TEXT NOT NULL,
    created_at   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_dialog_participants
ON dialog_messages (sender_id, recipient_id, created_at DESC);
