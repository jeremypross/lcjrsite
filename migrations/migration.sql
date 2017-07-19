BEGIN TRANSACTION;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_digest VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  title TEXT,
  post_text TEXT,
  image_url TEXT,
  source_url TEXT,
  category TEXT,
  user_id INTEGER REFERENCES users(id)
);

COMMIT;
