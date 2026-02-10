# highload

## Инструкция по локальному запуску приложения

- выполнить команду `docker compose up -d`
  - будет поднята бд postgres
  - сбилдится и запустится spring приложение
  - таблицы бд будут созданы при запуске приложения автоматически
  - выполнить bash скрипт `src/main/resources/import/import-people.sh`, который заполнить таблицу `users` данными из файла `people.v2.csv`
    - в скрипте надо указать путь к `psql.exe`
- Postman-коллекции расположена по пути `/postman/highload.postman_collection.json`

## Отчеты jMeter

- Отчеты jMeter лежат в папке `/jmeter/reports/`
- Запрос на добавление индексов
  ```
  CREATE INDEX idx_users_first_name ON users (LOWER(first_name) text_pattern_ops);
  CREATE INDEX idx_users_second_name ON users (LOWER(second_name) text_pattern_ops);
  ```
- Explain запросов после индекса
  ```
  EXPLAIN ANALYZE
  SELECT *
  FROM users 
  WHERE LOWER(first_name) LIKE 'а%' AND LOWER(second_name) LIKE 'и%'
  ORDER BY id ASC;

  "Sort  (cost=239.98..240.05 rows=25 width=669) (actual time=9.239..9.532 rows=8082 loops=1)"
  "  Sort Key: id"
  "  Sort Method: quicksort  Memory: 1011kB"
  "  ->  Bitmap Heap Scan on users  (cost=141.11..239.40 rows=25 width=669) (actual time=5.047..8.103 rows=8082 loops=1)"
  "        Filter: ((lower((first_name)::text) ~~ 'а%'::text) AND (lower((second_name)::text) ~~ 'и%'::text))"
  "        Heap Blocks: exact=550"
  "        ->  BitmapAnd  (cost=141.11..141.11 rows=25 width=0) (actual time=4.997..4.998 rows=0 loops=1)"
  "              ->  Bitmap Index Scan on idx_users_second_name  (cost=0.00..70.42 rows=5000 width=0) (actual time=0.474..0.474 rows=37423 loops=1)"
  "                    Index Cond: ((lower((second_name)::text) ~>=~ 'и'::text) AND (lower((second_name)::text) ~<~ 'й'::text))"
  "              ->  Bitmap Index Scan on idx_users_first_name  (cost=0.00..70.42 rows=5000 width=0) (actual time=4.430..4.430 rows=213106 loops=1)"
  "                    Index Cond: ((lower((first_name)::text) ~>=~ 'а'::text) AND (lower((first_name)::text) ~<~ 'б'::text))"
  "Planning Time: 0.111 ms"
  "Execution Time: 9.799 ms"
  ```
- Почему индекс именно такой
  - Использовался B-Tree индекс. Для операций сравнения, включая поиск по префиксу, B-Tree работает быстрее чем GIN индекс. Так же в индексе используется оператор `text_pattern_ops`, который позволяет ускорить поиск по префиксу в текстовых полях
  - GIN индекс подойдет для поиска подстроки в середине строки
