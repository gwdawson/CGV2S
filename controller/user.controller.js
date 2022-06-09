const { selectUserByUsername, selectUserByUserId, insertUser } = require('../model/user.model');

exports.getUserByUsername = async (req, res) => {
  const { username } = req.params;
  const user = await selectUserByUsername(username);
  if (user.length !== 0) {
    res.status(200).send({ status: 200, message: 'User found', data: user[0] });
  } else {
    res.status(200).send({ status: 200, message: 'User not found' });
  }
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await selectUserByUserId(id);
  if (user.length !== 0) {
    res.status(200).send({ status: 200, message: 'User found', data: user[0] });
  } else {
    res.status(200).send({ status: 200, message: 'User not found' });
  }
};

exports.postUser = async (req, res) => {
  try {
    const { user_id, user_name, user_password, user_avatar_url } = req.body;
    await insertUser(user_id, user_name, user_password, user_avatar_url);
    res.status(200).send({ status: 200, message: 'The user has been added to the Database' });
  } catch (e) {
    res.status(500).send({ status: 500, message: 'Internal Server Error' });
  }
};
