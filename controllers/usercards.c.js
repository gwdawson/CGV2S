const { insertUsercards, selectUsercardsById } = require('../models/usercards.m');

exports.postUsercards = async (req, res) => {};

exports.getUsercardsById = async (req, res) => {
  try {
    const { userid } = req.params;
    const usercards = await selectUsercardsById(userid);
    res.status(200).send({ status: 200, message: 'Found usercards', data: usercards });
  } catch (e) {
    console.log(e);
  }
};
