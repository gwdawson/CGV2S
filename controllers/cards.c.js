const { selectFiveCards } = require('../models/cards.m');

exports.getFiveCards = async (req, res) => {
  try {
    const { rows } = await selectFiveCards();
    return res.status(200).send({ status: 200, message: 'success', data: rows });
  } catch (e) {
    console.log(e);
  }
};
