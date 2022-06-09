const { insertUsers, selectUsersByUsername, selectUsersByUserid } = require('../models/users.m');

exports.postUsers = async (req, res) => {
  try {
    const { user_id, user_name, user_password, user_avatar_url } = req.body;
    await insertUsers(user_id, user_name, user_password, user_avatar_url);
    res.status(200).send({ status: 200, message: 'The user has been added to the Database' });
  } catch (e) {
    res.status(500).send({ status: 500, message: 'Internal Server Error' });
  }
};

exports.getUsersByUsername = async (req, res) => {
  const users = await selectUsersByUsername(req.params.username);
  if (users.length !== 0) {
    res.status(200).send({ status: 200, message: 'User found', data: users[0] });
  } else {
    res.status(200).send({ status: 200, message: 'User not found' });
  }
};

exports.getUsersByUserid = async (req, res) => {
  const users = await selectUsersByUserid(req.params.userid);
  if (users.length !== 0) {
    res.status(200).send({ status: 200, message: 'User found', data: users[0] });
  } else {
    res.status(200).send({ status: 200, message: 'User not found' });
  }
};
