const { insertUsercards, selectUsercardsById } = require('../models/usercards.m');

exports.postUsercards = async (req, res) => {
  try {
    const { user_id, card_id, usercards_issue, usercards_rank, usercards_xp } = req.body;
    await insertUsercards(user_id, card_id, usercards_issue, usercards_rank, usercards_xp);
    res.status(200).send({ status: 200, message: 'Inserted usercards' });
  } catch (e) {
    console.log(e);
  }
};

exports.getUsercardsById = async (req, res) => {
  try {
    const { userid } = req.params;
    const usercards = await selectUsercardsById(userid);
    res.status(200).send({ status: 200, message: 'Found usercards', data: usercards });
  } catch (e) {
    console.log(e);
  }
};
