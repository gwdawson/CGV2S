const { selectUsercardsUserid } = require('../models/usercards');

exports.getUsercardsUserid = async (req, res) => {
  try {
    const { userid } = req.query;
    const { rows } = await selectUsercardsUserid(userid);
    return res.status(200).send({ status: 200, message: rows });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ status: 500, message: 'Internal server error' });
  }
};
