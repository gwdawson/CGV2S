const database = require('../database');

exports.selectUserByUsername = async (user_name) => {
  const data = await database.query(`SELECT * FROM users WHERE user_name = $1;`, [user_name.toLowerCase()]);
  return data.rows;
};

exports.selectUserByUserId = async (user_id) => {
  const data = await database.query(`SELECT * FROM users WHERE user_id = $1;`, [user_id]);
  return data.rows;
};

exports.insertUser = async (user_id, user_name, user_password) => {
  const data = await database.query(
    `INSERT INTO users (user_id, user_name, user_password) VALUES ($1, $2, $3) RETURNING *;`,
    [user_id, user_name.toLowerCase(), user_password]
  );
  return data.rows[0];
};
