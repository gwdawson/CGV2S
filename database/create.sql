DROP DATABASE card_game_application;
CREATE DATABASE card_game_application;

\c card_game_application

CREATE TABLE users (
  "user_id" BIGINT PRIMARY KEY,
  "username" VARCHAR(14),
  "password" VARCHAR(64), 
  "avatar_url" VARCHAR(255),
  "join_date" BIGINT,
  "currency" INTEGER
);

CREATE TABLE cards (
  "card_id" SERIAL PRIMARY KEY,
  "name" VARCHAR(64),
  "group" VARCHAR(64),
  "issue_count" INTEGER,
  "image_url" VARCHAR(255)
);

CREATE TABLE usercards (
  "usercard_id" SERIAL PRIMARY KEY,
  "user_id" BIGINT,
  "card_id" INTEGER,
  "issue" INTEGER,
  "rank" TEXT,
  "xp" INTEGER
);

INSERT INTO users ("user_id", "username", "password", "avatar_url", "join_date", "currency")
VALUES (1234567812345678, 'gareth', '123456', 'https://64.media.tumblr.com/24f93e6373bd3d6a27ec2e096658b865/tumblr_nwxt5iu24I1ujp48jo1_400.png', 1654860449, 1000);

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('CHAEYOUNG', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/984520837237473361/Untitled-1.png');

INSERT INTO usercards ("user_id", "card_id", "issue", "rank", "xp")
VALUES (1234567812345678, 1, 1, 'H', 0);
