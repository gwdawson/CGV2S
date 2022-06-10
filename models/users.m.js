const database = require('../database');

exports.selectUsersByUsername = async (username) => {
  return await database.query(`SELECT * FROM users WHERE username = $1;`, [username.toLowerCase()]);
};

exports.selectUsersById = async (user_id) => {
  return await database.query(`SELECT * FROM users WHERE user_id = $1;`, [user_id]);
};

exports.insertUsers = async (user_id, username, password, avatar_url, join_date, currency) => {
  return await database.query(
    `INSERT INTO users (user_id, username, password, avatar_url, join_date, currency) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
    [user_id, username.toLowerCase(), password, avatar_url, join_date, currency]
  );
};
