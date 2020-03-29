const router = require("express").Router();
const { search } = require("../controllers");

router.get("/codes", search.getSearchCode);
router.get("/repositories", search.getSearchRepo);

module.exports = router;
