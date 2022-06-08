const { insertUser } = require('../model/user.model');

exports.postUser = async (req, res) => {
  try {
    const { user_id, user_name, user_password } = req.body;
    await insertUser(user_id, user_name, user_password);
    res.status(200).send({ status: 200, message: 'The user has been added to the Database' });
  } catch (e) {
    res.status(500).send({ status: 500, message: 'Internal Server Error' });
  }
};
