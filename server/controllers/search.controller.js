const api = require("../api");
const { search } = api;

const getSearchRepo = async (req, res) => {
  const results = await search.getRepoBySearch(req.query);
  res.send(results);
};

const getSearchCode = async (req, res) => {
  const results = await search.getCodeBySearch(req.query);
  res.send(results);
};

module.exports = {
  getSearchRepo,
  getSearchCode
};
