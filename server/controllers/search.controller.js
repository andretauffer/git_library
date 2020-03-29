const api = require("../api");
const { search } = api;

const getKeywords = string => {
  const keywords = string.match(/[\w\s]*(?=user:)/g)[0];
  const user = string.match(/(?<=user:)[\w\s]*/g)[0];
  const keywordsArray = keywords.split(" ");
  return { user, keywordsArray };
};

const registerKeywords = keywords => {
  search.saveKeyword(keywords.user, "user");
  keywords.keywordsArray.map(kw => kw && search.saveKeyword(kw, "keyword"));
};

const getSearchRepo = async (req, res) => {
  const results = await search.getRepoBySearch(req.query);
  const keywords = getKeywords(req.query.q);
  registerKeywords(keywords);
  res.send(results);
};

const getSearchCode = async (req, res) => {
  const results = await search.getCodeBySearch(req.query);
  const keywords = getKeywords(req.query.q);
  registerKeywords(keywords);
  res.send(results);
};

module.exports = {
  getSearchRepo,
  getSearchCode
};
