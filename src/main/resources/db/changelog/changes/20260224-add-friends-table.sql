CREATE TYPE friend_status AS ENUM ('pending', 'accepted', 'rejected');

CREATE TABLE IF NOT EXISTS friends
(
    id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id    UUID NOT NULL,
    friend_id  UUID NOT NULL,
    status     friend_status NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT,
    CONSTRAINT fk_friend FOREIGN KEY (friend_id) REFERENCES users(id) ON DELETE RESTRICT,
--     Запрет дружбы с самим собой
    CONSTRAINT check_not_self_friend CHECK (user_id <> friend_id),
--     Проверка на уникальность друзей
    CONSTRAINT unique_friendship UNIQUE (user_id, friend_id)
);

COMMENT ON TABLE friends IS 'Друзья';
COMMENT ON COLUMN friends.id IS 'Идентификатор друга';
COMMENT ON COLUMN friends.user_id IS 'Кто отправил запрос';
COMMENT ON COLUMN friends.friend_id IS 'Кому отправили запрос';
COMMENT ON COLUMN friends.status IS 'Статус';
COMMENT ON COLUMN friends.created_at IS 'Дата и время создания записи';