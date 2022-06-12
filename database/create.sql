DROP DATABASE card_game_application;
CREATE DATABASE card_game_application;

\c card_game_application

CREATE TABLE users (
  "user_id" BIGINT PRIMARY KEY,
  "username" VARCHAR(14),
  "password" VARCHAR(255), 
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
VALUES (1234567812345678, 'gareth', '$2a$10$0JLmdp7BvXoNnxkqvV7Gz.xCZbE6.UqWoA3TG5kJGklwf5lm/HBVu', 'https://64.media.tumblr.com/24f93e6373bd3d6a27ec2e096658b865/tumblr_nwxt5iu24I1ujp48jo1_400.png', 1654860449, 1000);

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('CHAEYOUNG', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566772142952468/chae.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('DAHYUN', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566772461723728/dahyun.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('JEONGYEON', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566772897935360/jeongyeon.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('JIHYO', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566773422227506/jihyo.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('MINA', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566773929726053/mina.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('MOMO', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566774244302888/momo.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('NAYEON', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566774533713960/nayeon.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('SANA', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566774802120785/sana.png');

INSERT INTO cards ("name", "group", "issue_count", "image_url")
VALUES ('TZUYU', 'TWICE', 1, 'https://media.discordapp.net/attachments/983643860406272060/985566775091531777/tzuyu.png');
