const { insertUserdata, selectUserdata, selectUserdataPassword } = require('../models/userdata');

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

exports.getUserdata = async (req, res) => {
  try {
    const { username } = req.query;
    const { rows } = await selectUserdata(username);
    if (rows.length > 0) {
      return res.status(200).send({ status: 200, message: rows[0] });
    } else {
      return res.status(404).send({ status: 404, message: 'User not found' });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send({ status: 500, message: 'Internal server error' });
  }
};

exports.getUserdataPassword = async (req, res) => {
  try {
    const { username } = req.query;
    const { rows } = await selectUserdataPassword(username);
    if (rows.length > 0) {
      return res.status(200).send({ status: 200, message: rows[0] });
    } else {
      return res.status(404).send({ status: 404, message: 'User not found' });
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send({ status: 500, message: 'Internal server error' });
  }
};
