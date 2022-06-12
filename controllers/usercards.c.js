const { selectUsercardsById, insertUsercards } = require('../models/usercards.m');

exports.getUsercardsById = async (req, res) => {
  try {
    const { userid } = req.params;
    const { rows } = await selectUsercardsById(userid);
    return res.status(200).send({ status: 200, message: 'success', data: rows });
  } catch (e) {
    console.log(e);
  }
};

exports.postUsercards = async (req, res) => {
  try {
    const { user_id, card_id, usercards_issue, usercards_rank, usercards_xp } = req.body;
    const { rows } = await insertUsercards(user_id, card_id, usercards_issue, usercards_rank, usercards_xp);
    return res.status(200).send({ status: 200, message: 'success', data: rows });
  } catch (e) {
    console.log(e);
  }
};
