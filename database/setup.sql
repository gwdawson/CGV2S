DROP DATABASE card_game_application;
CREATE DATABASE card_game_application;

\c card_game_application

CREATE TABLE users (
  user_id BIGINT PRIMARY KEY,
  user_name VARCHAR(14),
  user_password VARCHAR(64), 
  user_avatar_url VARCHAR(255)
);

CREATE TABLE cards (
  card_id SERIAL PRIMARY KEY,
  card_name VARCHAR(64),
  card_group VARCHAR(64),
  card_issue INTEGER,
  card_image_url VARCHAR(255)
);

CREATE TABLE userdata (
  user_id INTEGER,
  userdata_currency INTEGER
);

CREATE TABLE usercards (
  user_id INTEGER,
  card_id INTEGER,
  usercards_issue INTEGER,
  usercards_rank TEXT,
  usercards_xp INTEGER
);

SELECT * FROM users;
SELECT * FROM cards;
SELECT * FROM userdata;
SELECT * FROM usercards;
