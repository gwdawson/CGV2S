const { insertCards, updateCardIssue } = require('../models/cards.m');

exports.postCards = async (req, res) => {};

exports.incrementCardIssue = async (req, res) => {
  try {
    const { card_id } = req.body;
    const card = await updateCardIssue(card_id);
    res.status(200).send({ status: 200, message: 'Incremented card issue', data: card[0] });
  } catch (e) {
    console.log(e);
  }
};
