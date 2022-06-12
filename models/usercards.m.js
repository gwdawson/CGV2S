const database = require('../database');

exports.selectUsercardsById = async (user_id) => {
  return await database.query(
    `SELECT * FROM usercards JOIN cards ON usercards.card_id = cards.card_id WHERE user_id = $1 ORDER BY cards.name ASC;`,
    [user_id]
  );
};

exports.insertUsercards = async (user_id, card_id, usercards_issue, usercards_rank, usercards_xp) => {
  return await database.query(
    `INSERT INTO usercards (user_id, card_id, issue, rank, xp) VALUES ($1, $2, $3, $4, $5) RETURNING *;`,
    [user_id, card_id, usercards_issue, usercards_rank, usercards_xp]
  );
};
