DO $$
DECLARE
v_dialog_id UUID := '09986a1f-55fa-3d9f-a4af-507279821ca1'::UUID;
    v_sender_id UUID := '902731e2-92bb-4884-a2d2-4ed94061860d'::UUID;
    v_recipient_id UUID := '1a03ae84-5a4c-4dfd-b99b-ccbf9677acb6'::UUID;
BEGIN
    INSERT INTO dialog_messages (
        dialog_id,
        sender_id,
        recipient_id,
        message_text,
        is_read
    )
    SELECT
        v_dialog_id,
        v_sender_id,
        v_recipient_id,
        'Сообщение: ' || gen_random_uuid()::text,
        TRUE
    FROM generate_series(1, 300000);

    RAISE NOTICE 'Успешно создано 300000 диалогов: %', v_dialog_id;
END $$;
