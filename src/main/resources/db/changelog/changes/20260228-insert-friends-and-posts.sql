DO $$
DECLARE
main_user_id UUID;
    current_friend_id UUID;
    i INTEGER;
    j INTEGER;
BEGIN
    -- создаем 1 юзера
    INSERT INTO users (first_name, second_name, birthdate, sex, biography, city, password)
    VALUES ('Валера', 'Первый', '1990-01-01', 'MALE', 'У меня много друзей', 'Москва', '$2a$10$PP2XG1cqUQGvgX8SUOwcQeNZ0jO5NxkV2JZGarPIncjqlDfR3u2ZW')
    RETURNING id INTO main_user_id;

    -- создаем 50 друзей
    FOR i IN 1..50 LOOP
        INSERT INTO users (first_name, second_name, birthdate, sex, biography, city, password)
        VALUES (
            'Имя_друга_' || i,
            'Фамилия_друга_' || i,
            '1990-01-01'::DATE + (i || ' days')::INTERVAL,
            'MALE',
            NULL,
            NULL,
            '$2a$10$PP2XG1cqUQGvgX8SUOwcQeNZ0jO5NxkV2JZGarPIncjqlDfR3u2ZW'
        )
        RETURNING id INTO current_friend_id;

        INSERT INTO friends (user_id, friend_id, status)
        VALUES (main_user_id, current_friend_id, 'accepted');

        -- создаем 40 постов для каждого друга
        FOR j IN 1..40 LOOP
            INSERT INTO posts (author_id, text, created_at)
            VALUES (
                current_friend_id,
                'Рандомный текст поста #' || j || ' от друга Имя_друга_' || i || '. ' || md5(random()::text),
                NOW() - (i || ' days')::INTERVAL
            );
        END LOOP;
    END LOOP;
    RAISE NOTICE 'Создан 1 юзер, 50 друзей и 2000 постов.';
END $$;
