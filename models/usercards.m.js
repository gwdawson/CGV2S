const database = require('../database');

exports.insertUsercards = async (req, res) => {};

exports.selectUsercardsById = async (user_id) => {
  const { rows } = await database.query(
    'SELECT * FROM usercards JOIN cards ON usercards.card_id = cards.card_id WHERE user_id = $1',
    [parseInt(user_id)]
  );
  return rows;
};
