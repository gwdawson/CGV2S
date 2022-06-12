const { selectFiveCards, updateCardById } = require('../models/cards.m');

exports.getFiveCards = async (req, res) => {
  try {
    const { rows } = await selectFiveCards();
    return res.status(200).send({ status: 200, message: 'success', data: rows });
  } catch (e) {
    console.log(e);
  }
};

exports.patchCardsById = async (req, res) => {
  try {
    const { cardid } = req.params;
    const { rows } = await updateCardById(cardid);
    return res.status(200).send({ status: 200, message: 'success', data: rows });
  } catch (e) {
    console.log(e);
  }
};
