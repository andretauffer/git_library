const router = require("express").Router();
const { repositories } = require("../controllers");

router.get("/", repositories.getSearch);

module.exports = router;
