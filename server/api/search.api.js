const fetch = require("node-fetch");
const pool = require("../db").pool;

const ERROR = {
  dbConnection:
    "### database connection refused, check if database is still running ### \n",
  apiError:
    "### api call refused, check if your are connected to the internet, and if you might have used all your free daily requests ### \n"
};

const searchPath = "https://api.github.com/search";

const getRepoBySearch = async query =>
  await fetch(
    `${searchPath}/repositories?q=${query.q}&sort=${query.sort}&page=${query.page}&per_page=10`,
    {
      method: "GET"
    }
  )
    .then(data => data.json())
    .catch(err => console.debug(ERROR.apiError, err));

const getCodeBySearch = async query =>
  await fetch(
    `${searchPath}/code?q=${query.q}&sort=${query.sort}&page=${query.page}&per_page=10`,
    {
      method: "GET"
    }
  )
    .then(data => data.json())
    .catch(err => console.debug(ERROR.apiError, err));

const createKeywordTable = async () => {
  await pool
    .query(
      `CREATE TABLE IF NOT EXISTS keywords (
      id SERIAL PRIMARY KEY,
      name VARCHAR UNIQUE NOT NULL UNIQUE,
      type VARCHAR NOT NULL,
      last_searched TIMESTAMP default current_timestamp,
      count INT
      );`
    )
    .then(() => console.debug("table exists"))
    .catch(err => console.debug(ERROR.dbConnection, err));
};

const saveKeyword = async (keyword, type) => {
  await createKeywordTable();
  await pool
    .query(
      `INSERT INTO keywords (name, type, count)
      VALUES ($1, $2, 1)
      ON CONFLICT (name) 
      DO UPDATE SET count = keywords.count + EXCLUDED.count;`,
      [keyword, type]
    )
    .then(() => console.debug("keyword saved"))
    .catch(err => console.debug(ERROR.dbConnection, err));
};

module.exports = {
  getRepoBySearch,
  getCodeBySearch,
  saveKeyword
};
