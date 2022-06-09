const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

const { postUsers, getUsersByUsername, getUsersByUserid } = require('./controllers/users.c');
const { postCards } = require('./controllers/cards.c');
const { postUserdata } = require('./controllers/userdata.c');
const { postUsercards, getUsercardsById } = require('./controllers/usercards.c');

app.use(express.json());
app.use(cors());

app.get('/users/u/:username', getUsersByUsername);
app.get('/users/i/:userid', getUsersByUserid);
app.post('/users', postUsers);

app.get('/usercards/:userid', getUsercardsById);
app.post('/usercards/', postUsercards);

// app.post('/cards', postCards);
// app.post('/userdata', postUserdata);
// app.post('/usercards', postUsercards);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
