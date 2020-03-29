const api = require("../api");

const { feed } = api;
//q=react+useReducer+user:andretauffer
const buildFeedQueries = array => {
  let queries = [];
  const keywords = array.filter(kw => kw.type === "keyword");
  if (keywords) {
    keywords.forEach(kw => queries.push(`q=${kw}`));
  }
  return keywords;
};

const getNewsFeed = async array => {
  const queries = [];
  array.forEach(query => {
    queries.push(feed.getNewsFeed(`repositories?${query}`, "repositories"));
    queries.push(feed.getNewsFeed(`code?${query}`, "codes"));
  });
  return Promise.all(queries).then(data => data);
};

const getFeed = async (req, res) => {
  const keywords = await feed.getLatestKeywords();
  if (keywords) {
    const queries = buildFeedQueries(keywords);
    const newsFeed = getNewsFeed(queries);
    return newsFeed.then(data => {
      res.send(data);
    });
  }
  const results = await feed.getDefaultFeed();
  res.send({ path: "codes", ...results });
};

module.exports = {
  getFeed
};
