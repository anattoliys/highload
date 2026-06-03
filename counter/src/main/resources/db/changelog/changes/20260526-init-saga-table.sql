CREATE TABLE IF NOT EXISTS saga_states
(
    saga_id      UUID         NOT NULL,
    recipient_id VARCHAR(255) NOT NULL,
    status       VARCHAR(20)  NOT NULL,
    created_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   TIMESTAMP,
    CONSTRAINT pk_saga_states PRIMARY KEY (saga_id)
);

CREATE INDEX IF NOT EXISTS idx_saga_recipient ON saga_states (recipient_id);
CREATE INDEX IF NOT EXISTS idx_saga_status ON saga_states (status);
