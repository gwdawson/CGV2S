const { insertUserdata } = require('../models/userdata');

exports.postUserdata = async (req, res) => {
  try {
    const { userid, username, password, avatar, joindate, cards, trades, currency, packs } = req.body;
    const { rows } = await insertUserdata(userid, username, password, avatar, joindate, cards, trades, currency, packs);
    console.log(rows[0]);
  } catch (e) {
    console.error(e);
    return res.status(500).send({ status: 500, message: 'Internal server error' });
  }
};
