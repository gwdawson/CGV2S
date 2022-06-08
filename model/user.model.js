const database = require('../database');

exports.insertUser = async (user_id, user_name, user_password) => {
  const data = await database.query(
    `INSERT INTO users (user_id, user_name, user_password) VALUES ($1, $2, $3) RETURNING *;`,
    [user_id, user_name, user_password]
  );
  return data.rows[0];
};
