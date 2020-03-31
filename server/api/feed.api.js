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
        WHERE type='keyword'
        ORDER BY count DESC
        LIMIT 3`
    )
    .then(res => res.rows)
    .catch(console.error);

module.exports = {
  getDefaultFeed,
  getLatestKeywords,
  getNewsFeed
};
