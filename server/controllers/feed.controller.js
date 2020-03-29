const api = require("../api");

const { feed } = api;
//q=react+useReducer+user:andretauffer
const buildFeedQueries = array => {
  let queries = [];
  const keywords = array.filter(kw => kw.type === "keyword");
  if (keywords) {
    keywords.forEach(kw => queries.push(`q=${kw.name}`));
  }
  return queries;
};

const getNewsFeed = async array => {
  const queries = [];
  array.forEach(query => {
    queries.push(feed.getNewsFeed(`repositories?${query}`, "repositories"));
  });
  return Promise.all(queries);
};

const joinFeed = array => {
  const result = { path: "repositories", total_count: 0, items: [] };
  array.forEach(response => {
    result.items.push(...response.items);
    result.total_count = result.total_count + response.total_count;
  });
  result.items.sort((a, b) => a.updated_at > b.updated_at);
  return result;
};

const getFeed = async (req, res) => {
  const keywords = await feed.getLatestKeywords();
  if (keywords) {
    const queries = buildFeedQueries(keywords);
    const newsFeed = getNewsFeed(queries);
    console.log("the", newsFeed, "news");
    return newsFeed.then(data => {
      const finalFeed = joinFeed(data);
      console.log("the", finalFeed, "data");
      res.send(finalFeed);
    });
  }
  const results = await feed.getDefaultFeed();
  res.send({ path: "codes", ...results });
};

module.exports = {
  getFeed
};
