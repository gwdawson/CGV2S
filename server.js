const express = require("express");
const database = require("./database");
const cors = require("cors");
const app = express();
const port = 9000;

const { getDefault } = require("./controller");

app.use(express.json());
app.use(cors());

app.get("/", getDefault);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
