const { selectUsercardsById } = require('../models/usercards.m');

exports.getUsercardsById = async (req, res) => {
  try {
    const { userid } = req.params;
    const { rows } = await selectUsercardsById(userid);
    return res.status(200).send({ status: 200, message: 'success', data: rows });
  } catch (e) {
    console.log(e);
  }
};
