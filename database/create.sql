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
  user_id BIGINT,
  userdata_currency INTEGER
);

CREATE TABLE usercards (
  user_id BIGINT,
  card_id INTEGER,
  usercards_id SERIAL PRIMARY KEY,
  usercards_issue INTEGER,
  usercards_rank TEXT,
  usercards_xp INTEGER
);

INSERT INTO users (user_id, user_name, user_password, user_avatar_url)
VALUES (1111111111111111, 'gareth', '123456', 'https://64.media.tumblr.com/24f93e6373bd3d6a27ec2e096658b865/tumblr_nwxt5iu24I1ujp48jo1_400.png');

INSERT INTO cards (card_name, card_group, card_issue, card_image_url)
VALUES ('CHAEYOUNG', 'TWICE', 0, 'https://media.discordapp.net/attachments/983643860406272060/984520837237473361/Untitled-1.png');
