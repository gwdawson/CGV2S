const { Pool } = require("pg");

require("dotenv").config({ path: `${__dirname}/../.env` });

if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE not set!");
}

const database = new Pool();

module.exports = database;
