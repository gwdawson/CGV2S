DROP DATABASE card_game_application;
CREATE DATABASE card_game_application;

\c card_game_application

CREATE TABLE cards (
  "cardid" SERIAL PRIMARY KEY,
  "idol" TEXT,
  "group" TEXT,
  "rarity" INTEGER,
  "issuecount" INTEGER,
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
  "userid" BIGINT,
  "cardid" INTEGER,
  "issue" INTEGER
);

INSERT INTO cards ("idol", "group", "rarity", "issuecount", "imageurl") VALUES ('Nayeon', 'Twice', 1, 3, 'https://media.discordapp.net/attachments/983643860406272060/993874866719707249/Nayeon-1-V1.png');
INSERT INTO cards ("idol", "group", "rarity", "issuecount", "imageurl") VALUES ('Nayeon', 'Twice', 2, 3, 'https://media.discordapp.net/attachments/983643860406272060/993874867155898450/Nayeon-2-V1.png');
INSERT INTO cards ("idol", "group", "rarity", "issuecount", "imageurl") VALUES ('Nayeon', 'Twice', 3, 3, 'https://media.discordapp.net/attachments/983643860406272060/993874867533402122/Nayeon-3-V1.png');
INSERT INTO cards ("idol", "group", "rarity", "issuecount", "imageurl") VALUES ('Nayeon', 'Twice', 4, 3, 'https://media.discordapp.net/attachments/983643860406272060/993874867986370691/Nayeon-4-V1.png');
INSERT INTO cards ("idol", "group", "rarity", "issuecount", "imageurl") VALUES ('Nayeon', 'Twice', 5, 3, 'https://media.discordapp.net/attachments/983643860406272060/993874868284174346/Nayeon-5-V1.png');

INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 1, 1);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 1, 2);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 1, 3);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 2, 1);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 2, 2);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 2, 3);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 3, 1);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 3, 2);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 3, 3);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 4, 1);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 4, 2);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 4, 3);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 5, 1);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 5, 2);
INSERT INTO usercards ("userid", "cardid", "issue") VALUES (7866352741557574, 5, 3);

INSERT INTO userdata ("userid", "username", "password", "avatar", "joindate", "cards", "trades", "currency", "packs") VALUES (7866352741557574, 'Gareth', '$2a$10$0JLmdp7BvXoNnxkqvV7Gz.xCZbE6.UqWoA3TG5kJGklwf5lm/HBVu', 'https://i.pinimg.com/736x/ec/df/6b/ecdf6b402e8f6c87066cb8d4e600b117.jpg', '2020-01-01 00:00:00', 0, 0, 0, 0);
INSERT INTO userdata ("userid", "username", "password", "avatar", "joindate", "cards", "trades", "currency", "packs") VALUES (4626279753625442, 'username', '$2a$10$0JLmdp7BvXoNnxkqvV7Gz.xCZbE6.UqWoA3TG5kJGklwf5lm/HBVu', 'https://i.pinimg.com/736x/ec/df/6b/ecdf6b402e8f6c87066cb8d4e600b117.jpg', '2020-01-01 00:00:00', 0, 0, 0, 0);
