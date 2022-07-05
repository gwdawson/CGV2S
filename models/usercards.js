const database = require('../database');

exports.selectUsercardsUserid = async (userid) => {
  return database.query(
    `SELECT * FROM usercards JOIN cards ON usercards.cardid = cards.cardid WHERE userid = $1 ORDER BY cards.group ASC, cards.rarity ASC, usercards.issue ASC`,
    [userid]
  );
};
