const database = require('../database');

exports.selectFiveCards = async () => {
  return await database.query(`SELECT * FROM cards ORDER BY RANDOM() LIMIT 5;`);
};

exports.updateCardById = async (card_id) => {
  return await database.query(`UPDATE cards SET issue_count = issue_count + 1 WHERE card_id = $1 RETURNING *;`, [
    card_id,
  ]);
};
