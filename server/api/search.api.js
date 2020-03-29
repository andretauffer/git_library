const fetch = require("node-fetch");
const pool = require("../db").pool;

const searchPath = "https://api.github.com/search";

const getRepoBySearch = async query =>
  await fetch(
    `${searchPath}/repositories?q=${query.q}&sort=${query.sort}&page=${query.page}&per_page=10`,
    {
      method: "GET"
    }
  ).then(data => data.json());

const getCodeBySearch = async query =>
  await fetch(
    `${searchPath}/code?q=${query.q}&sort=${query.sort}&page=${query.page}&per_page=10`,
    {
      method: "GET"
    }
  ).then(data => data.json());

const createKeywordTable = async () => {
  await pool
    .query(
      `CREATE TABLE IF NOT EXISTS keywords (
      id SERIAL PRIMARY KEY,
      name VARCHAR UNIQUE NOT NULL,
      type VARCHAR NOT NULL,
      created_date TIMESTAMP default current_timestamp
      );`
    )
    .then(() => console.debug("table exists"))
    .catch(console.error);
};

const saveKeyword = async (keyword, type) => {
  await createKeywordTable();
  await pool
    .query(
      `INSERT INTO keywords (name, type)
      VALUES ($1, $2);`,
      [keyword, type]
    )
    .then(() => console.debug("keyword saved"))
    .catch(console.error);
};

module.exports = {
  getRepoBySearch,
  getCodeBySearch,
  saveKeyword
};
