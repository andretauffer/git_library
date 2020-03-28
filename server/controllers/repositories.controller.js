const api = require("../api/");
const { repositories } = api;

const getSearch = async (req, res) => {
  const results = await repositories.getRepoBySearch(req.query.q);
  res.send(results);
};

module.exports = {
  getSearch
};
