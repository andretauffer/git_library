const api = require("../api/");
const { repositories } = api;

const getSearch = async (req, res) => {
  console.log("q", req.query);
  const results = await repositories.getRepoBySearch(req.query);
  res.send(results);
};

module.exports = {
  getSearch
};
