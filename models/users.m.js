const database = require('../database');

exports.insertUsers = async (user_id, user_name, user_password, user_avatar_url) => {
  return await database.query(
    `INSERT INTO users (user_id, user_name, user_password, user_avatar_url) VALUES ($1, $2, $3, $4);`,
    [user_id, user_name.toLowerCase(), user_password, user_avatar_url]
  );
};

exports.selectUsersByUsername = async (user_name) => {
  const data = await database.query(`SELECT * FROM users WHERE user_name = $1;`, [user_name.toLowerCase()]);
  return data.rows;
};

exports.selectUsersByUserid = async (user_id) => {
  const data = await database.query(`SELECT * FROM users WHERE user_id = $1;`, [user_id]);
  return data.rows;
};
