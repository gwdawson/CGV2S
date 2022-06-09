const database = require('../database');

exports.insertCards = async (req, res) => {};

exports.updateCardIssue = async (card_id) => {
  const data = await database.query('UPDATE cards SET card_issue = card_issue + 1 WHERE card_id = $1 RETURNING *', [
    card_id,
  ]);
  return data.rows;
};
