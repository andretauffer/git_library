const express = require("express");
const path = require("path");
const pg = require("pg");
const bodyParser = require("body-parser");
const { databaseConnect } = require("./db");
const Client = pg.Client;
const app = express();

databaseConnect();

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

(async function createTables() {
  await client.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username varchar not null unique,
        password varchar not null,
        name varchar not null
        );`);
  await client.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        search VARCHAR,
        );`);

  await client.query(`
    CREATE TABLE IF NOT EXISTS search_keywords(
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES "users" (id),
        search_id INTEGER NOT NULL,
        FOREIGN KEY (search_id) REFERENCES "search" (id)
    )
    `);
})();
