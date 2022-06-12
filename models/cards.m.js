const database = require('../database');

exports.selectFiveCards = async () => {
  return await database.query(`SELECT * FROM cards ORDER BY RANDOM() LIMIT 5;`);
};
