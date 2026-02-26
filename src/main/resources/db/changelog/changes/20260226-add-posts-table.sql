CREATE TABLE IF NOT EXISTS posts
(
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    author_id   UUID NOT NULL,
    text        TEXT NOT NULL,
    is_deleted  BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP,
    CONSTRAINT fk_posts_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE RESTRICT
);

COMMENT ON TABLE posts IS 'Посты';
COMMENT ON COLUMN posts.id IS 'Идентификатор поста';
COMMENT ON COLUMN posts.author_id IS 'Автор поста';
COMMENT ON COLUMN posts.text IS 'Текст поста';
COMMENT ON COLUMN posts.is_deleted IS 'Индикатор удаления поста';
COMMENT ON COLUMN posts.created_at IS 'Дата и время создания';
COMMENT ON COLUMN posts.updated_at IS 'Дата и время обновления';
