# highload

## Инструкция по локальному запуску приложения

- выполнить команду `docker compose up -d`
  - будет поднята бд postgres
  - сбилдится и запустится spring приложение
  - таблицы бд будут созданы при запуске приложения автоматически
  - выполнить bash скрипт `src/main/resources/import/import-people.sh`, который заполнить таблицу `users` данными из файла `people.v2.csv`
    - в скрипте надо указать путь к `psql.exe`
- Postman-коллекции расположена по пути `/postman/highload.postman_collection.json`

## Производительность индексов

- Отчеты jMeter лежат в папке `/jmeter/reports/`
- Запрос на добавление составного индексов
  ```
  CREATE INDEX idx_users_names ON users (LOWER(first_name) text_pattern_ops, LOWER(second_name) text_pattern_ops, id ASC);
  ```

- Explain запросов после индекса
  ```
  EXPLAIN ANALYZE
  SELECT *
  FROM users 
  WHERE LOWER(first_name) LIKE 'а%' AND LOWER(second_name) LIKE 'и%'
  ORDER BY id ASC;

  "Sort  (cost=344.51..344.57 rows=25 width=669) (actual time=16.086..16.389 rows=8082 loops=1)"
  "  Sort Key: id"
  "  Sort Method: quicksort  Memory: 1011kB"
  "  ->  Index Scan using idx_users_names on users  (cost=0.42..343.93 rows=25 width=669) (actual time=0.068..14.702 rows=8082 loops=1)"
  "        Index Cond: ((lower((first_name)::text) ~>=~ 'а'::text) AND (lower((first_name)::text) ~<~ 'б'::text) AND (lower((second_name)::text) ~>=~ 'и'::text) AND (lower((second_name)::text) ~<~ 'й'::text))"
  "        Filter: ((lower((first_name)::text) ~~ 'а%'::text) AND (lower((second_name)::text) ~~ 'и%'::text))"
  "Planning Time: 0.075 ms"
  "Execution Time: 16.655 ms"
  ```
- Почему индекс именно такой
  - Использовался B-Tree составной индекс. Составной индекс работает быстрее, чем два отдельных, так как выполняет один проход по дереву и сразу получает отфильтрованный результат, в то время как два отдельных индекса требуют раздельного сканирования и последующего слияния. Для операций сравнения, включая поиск по префиксу, B-Tree работает быстрее чем GIN индекс. Так же в индексе используется оператор `text_pattern_ops`, который позволяет ускорить поиск по префиксу в текстовых полях
