const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

const { postUsers, getUsersByUsername, getUsersById } = require('./controllers/users.c');

app.use(express.json());
app.use(cors());

app.get('/users/username/:username', getUsersByUsername);
app.get('/users/id/:userid', getUsersById);
app.post('/users', postUsers);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
