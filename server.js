const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

const { postUser } = require('./controller/user.controller');

app.use(express.json());
app.use(cors());

app.post('/user', postUser);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
