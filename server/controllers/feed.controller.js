const api = require("../api");
const { feed } = api;

const getFeed = async (req, res) => {
  const results = await feed.getDefaultFeed();
  console.log("got here inside feed", results);
  res.send({ path: "codes", ...results });
};

module.exports = {
  getFeed
};
