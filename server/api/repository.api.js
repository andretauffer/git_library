const fetch = require("node-fetch");

const searchPath = "https://api.github.com/search/repositories";

const getRepoBySearch = async query =>
  await fetch(
    `${searchPath}?q=${query.q}&sort=${query.sort}&page=${query.page}&per_page=10`,
    {
      method: "GET"
    }
  ).then(data => data.json());

module.exports = {
  getRepoBySearch
};
