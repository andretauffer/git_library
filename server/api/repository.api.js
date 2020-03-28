const fetch = require("node-fetch");

const searchPath = "https://api.github.com/search/repositories";

const getRepoBySearch = async search =>
  await fetch(`${searchPath}?q=${search}{&page,per_page,sort,order}`, {
    method: "GET"
  }).then(data => data.json());

module.exports = {
  getRepoBySearch
};
