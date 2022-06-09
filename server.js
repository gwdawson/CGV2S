const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

const { getUserByUsername, getUserById, postUser } = require('./controller/user.controller');

app.use(express.json());
app.use(cors());

app.get('/username/:username', getUserByUsername);

app.get('/userid/:id', getUserById);

app.post('/user', postUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
