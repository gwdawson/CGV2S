const database = require('../database');

exports.selectUsercardsById = async (user_id) => {
  return await database.query(
    `SELECT * FROM usercards JOIN cards ON usercards.card_id = cards.card_id WHERE user_id = $1;`,
    [user_id]
  );
};
