const database = require('../database');

exports.insertUsercards = async (user_id, card_id, usercards_issue, usercards_rank, usercards_xp) => {
  return await database.query(
    'INSERT INTO usercards (user_id, card_id, usercards_issue, usercards_rank, usercards_xp) VALUES ($1, $2, $3, $4, $5);',
    [user_id, card_id, usercards_issue, usercards_rank, usercards_xp]
  );
};

exports.selectUsercardsById = async (user_id) => {
  const { rows } = await database.query(
    'SELECT * FROM usercards JOIN cards ON usercards.card_id = cards.card_id WHERE user_id = $1',
    [parseInt(user_id)]
  );
  return rows;
};
