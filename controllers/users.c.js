const { insertUsers, selectUsersByUsername, selectUsersById } = require('../models/users.m');

exports.getUsersByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const { rows } = await selectUsersByUsername(username);
    if (rows.length !== 0) return res.status(200).send({ status: 200, message: 'success', data: rows[0] });
    return res.status(200).send({ status: 200, message: 'error' });
  } catch (e) {
    console.log(e);
  }
};

exports.getUsersById = async (req, res) => {
  try {
    const { userid } = req.params;
    const { rows } = await selectUsersById(userid);
    if (rows.length !== 0) return res.status(200).send({ status: 200, message: 'success', data: rows[0] });
    return res.status(200).send({ status: 200, message: 'error' });
  } catch (e) {
    console.log(e);
  }
};

exports.postUsers = async (req, res) => {
  try {
    const { user_id, username, password, avatar_url, join_date, currency } = req.body;
    const { rows } = await insertUsers(user_id, username, password, avatar_url, join_date, currency);
    return res.status(200).send({ status: 200, message: 'success' });
  } catch (e) {
    console.log(e);
  }
};
