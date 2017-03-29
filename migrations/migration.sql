--  database is called get_wanderlust (created)

BEGIN TRANSACTION;

DROP TABLE IF EXISTS explore_list;
DROP TABLE IF EXISTS users;

CREATE TABLE users
(id BIGSERIAL PRIMARY KEY,
first_name VARCHAR(255),
last_name VARCHAR(255),
email VARCHAR(255) UNIQUE,
password_digest VARCHAR(500)
);

CREATE TABLE explore_lists
(id BIGSERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
city_name VARCHAR(255),
priority INTEGER
);


COMMIT;
