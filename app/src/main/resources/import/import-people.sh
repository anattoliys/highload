#!/bin/bash

DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="highload-db"
DB_USER="highload-user"
DB_PASS="12345678"
TABLE_NAME="users"
FILE_PATH="people.v2.csv"
PSQL_PATH="C:\Users\anatt\AppData\Local\Programs\pgAdmin 4\runtime\psql.exe" # TODO указать путь к psql.exe

if [ ! -f "$FILE_PATH" ]; then
    echo "Ошибка: Файл '$FILE_PATH' не найден."
    exit 1
fi

export PGPASSWORD=$DB_PASS

iconv -c -f WINDOWS-1251 -t UTF-8 "$FILE_PATH" | "$PSQL_PATH" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" -U "$DB_USER" \
-c "\copy $TABLE_NAME(first_name, birthdate, city) FROM '$FILE_PATH' WITH (FORMAT csv, DELIMITER ',');
UPDATE users SET second_name = SPLIT_PART(first_name, ' ', 1), first_name = SPLIT_PART(first_name, ' ', 2);
"

unset PGPASSWORD

echo "Данные успешно загружены"
