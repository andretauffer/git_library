const fetch = require("node-fetch");

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

module.exports = {
  getRepoBySearch,
  getCodeBySearch
};
