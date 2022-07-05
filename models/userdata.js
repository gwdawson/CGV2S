const database = require('../database');

exports.insertUserdata = (userid, username, password, avatar, joindate, cards, trades, currency, packs) => {
  return database.query(
    `INSERT INTO userdata (userid, username, password, avatar, joindate, cards, trades, currency, packs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [userid, username, password, avatar, joindate, cards, trades, currency, packs]
  );
};

exports.selectUserdataUsername = (username) => {
  return database.query(
    `SELECT userid, username, avatar, joindate, cards, trades, currency, packs FROM userdata WHERE UPPER(username) = $1`,
    [username.toUpperCase()]
  );
};

exports.selectUserdataUserid = (userid) => {
  return database.query(
    `SELECT userid, username, avatar, joindate, cards, trades, currency, packs FROM userdata WHERE userid = $1`,
    [userid]
  );
};

exports.selectUserdataPassword = (username) => {
  return database.query(`SELECT password FROM userdata WHERE UPPER(username) = $1`, [username.toUpperCase()]);
};
