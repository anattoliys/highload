if not box.info.ro then
    local s = box.schema.space.create('messages', { if_not_exists = true })
    s:format({
        {name = 'id',           type = 'string'},
        {name = 'dialog_id',    type = 'string'},
        {name = 'sender_id',    type = 'string'},
        {name = 'recipient_id', type = 'string'},
        {name = 'message_text', type = 'string'},
        {name = 'is_read',      type = 'boolean'},
        {name = 'created_at',   type = 'string'},
        {name = 'updated_at',   type = 'string', is_nullable = true}
    })
    s:create_index('primary', {parts = {'id'}, if_not_exists = true})
    s:create_index('dialog_idx', {parts = {'dialog_id'}, unique = false, if_not_exists = true})

    function insert_messages_batch(messages_batch)
        box.begin()
        for _, msg in ipairs(messages_batch) do
            box.space.messages:replace(msg)
        end
        box.commit()
    end

    function get_messages_page(dialog_id, offset, limit)
        local messages = box.space.messages.index.dialog_idx:select({dialog_id}, {
            offset = offset,
            limit = limit
        })

        local res = {}
        for i, v in ipairs(messages) do res[i] = v:totable() end

        return setmetatable(res, { __serialize = 'seq' })
    end

    function save_message(id, dialog_id, sender_id, recipient_id, message_text)
        local created_at = os.date('!%Y-%m-%dT%H:%M:%SZ')
        return box.space.messages:insert({
            id,
            dialog_id,
            sender_id,
            recipient_id,
            message_text,
            false,
            created_at,
            nil
        })
    end
end
