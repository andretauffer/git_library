const fetch = require("node-fetch");
const pool = require("../db").pool;

const searchPath = "https://api.github.com/search/";

const getDefaultFeed = async () =>
  await fetch(`${searchPath}code?q=react+useReducer+user:andretauffer`, {
    method: "GET"
  }).then(data => data.json());

const getNewsFeed = async (query, path) =>
  await fetch(`${searchPath}${query}`, {
    method: "GET"
  })
    .then(data => data.json())
    .then(res => {
      return { path, ...res };
    });

const getLatestKeywords = async () =>
  await pool
    .query(
      ` SELECT name, type FROM keywords
        ORDER BY created_date DESC
        LIMIT 5`
    )
    .then(res => res.rows)
    .catch(console.error);

module.exports = {
  getDefaultFeed,
  getLatestKeywords,
  getNewsFeed
};

//&sort=${query.sort}&page=${query.page}&per_page=10
