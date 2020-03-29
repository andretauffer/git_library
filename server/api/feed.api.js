const fetch = require("node-fetch");

const searchPath =
  "https://api.github.com/search/code?q=react+useReducer+user:andretauffer";

const getDefaultFeed = async query =>
  await fetch(`${searchPath}`, {
    method: "GET"
  }).then(data => data.json());

module.exports = {
  getDefaultFeed
};

//&sort=${query.sort}&page=${query.page}&per_page=10
