CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users
(
    id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name  VARCHAR(255) NOT NULL,
    second_name VARCHAR(255) NOT NULL,
    birthdate   DATE,
    sex         VARCHAR(10),
    biography   TEXT,
    city        VARCHAR(255),
    password    VARCHAR(255) NOT NULL,
    created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP
);

COMMENT ON TABLE users IS 'Пользователи';
COMMENT ON COLUMN users.id IS 'Идентификатор пользователя';
COMMENT ON COLUMN users.first_name IS 'Имя пользователя';
COMMENT ON COLUMN users.second_name IS 'Фамилия пользователя';
COMMENT ON COLUMN users.birthdate IS 'Дата рождения пользователя';
COMMENT ON COLUMN users.sex IS 'Пол пользователя';
COMMENT ON COLUMN users.biography IS 'Интересы пользователя';
COMMENT ON COLUMN users.city IS 'Город пользователя';
COMMENT ON COLUMN users.password IS 'Пароль пользователя';
COMMENT ON COLUMN users.created_at IS 'Дата и время создания';
COMMENT ON COLUMN users.updated_at IS 'Дата и время обновления';

ALTER TABLE users ADD CONSTRAINT check_sex CHECK (sex IN ('MALE', 'FEMALE'));
