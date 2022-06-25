const database = require('../database');

exports.insertUserdata = (userid, username, password, avatar, joindate, cards, trades, currency, packs) => {
  return database.query(
    `INSERT INTO userdata (userid, username, password, avatar, joindate, cards, trades, currency, packs) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
    [userid, username, password, avatar, joindate, cards, trades, currency, packs]
  );
};
