const router = require("express").Router();
const { feed } = require("../controllers");

router.get("/feed", feed.getFeed);

module.exports = router;
