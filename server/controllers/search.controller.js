const api = require("../api");
const { search } = api;

const getKeywords = string => {
  const user = string.match(/(?<=user:)[\w\s]*/g);
  let keywords = [];
  if (user) {
    keywords = string.match(/[\w\s]*(?=user:)/g)[0];
  } else {
    keywords = string;
  }
  const keywordsArray = keywords.split(" ");
  return { user, keywordsArray };
};

const registerKeywords = keywords => {
  if (keywords.user && keywords.user[0]) {
    search.saveKeyword(keywords.user, "user");
  }
  keywords.keywordsArray.map(
    kw => kw && search.saveKeyword(kw.toUpperCase(), "keyword")
  );
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
