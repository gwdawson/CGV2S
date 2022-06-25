DROP DATABASE card_game_application;
CREATE DATABASE card_game_application;

\c card_game_application

CREATE TABLE cards (
  "cardid" SERIAL PRIMARY KEY,
  "idol" TEXT,
  "group" TEXT,
  "issuecount" INTEGER,
  "imageurl" TEXT
);

CREATE TABLE achievements (
  "achievementid" SERIAL PRIMARY KEY,
  "name" TEXT,
  "imageurl" TEXT
);

CREATE TABLE userdata (
  "userid" BIGINT PRIMARY KEY,
  "username" TEXT,
  "password" TEXT,
  "avatar" TEXT,
  "joindate" TIMESTAMP,
  "cards" INTEGER,
  "trades" INTEGER,
  "currency" INTEGER,
  "packs" INTEGER
);

CREATE TABLE usercards (
  "userid" INTEGER,
  "cardid" INTEGER,
  "issue" INTEGER
);

CREATE TABLE userachievements (
  "userid" INTEGER,
  "achievementid" INTEGER,
  "unlockdate" TIMESTAMP
);

INSERT INTO userdata ("userid", "username", "password", "avatar", "joindate", "cards", "trades", "currency", "packs")
VALUES (1111111111111111, 'gareth', '$2a$10$0JLmdp7BvXoNnxkqvV7Gz.xCZbE6.UqWoA3TG5kJGklwf5lm/HBVu', 'https://i.imgur.com/lbHtWIk.jpeg', '2020-01-01 00:00:00', 0, 0, 0, 0);
