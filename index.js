const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { databaseConnect } = require("./server/db");
const { search, feed } = require("./server/routers");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}

const app = express();

databaseConnect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/feed", feed);

app.use("/api/search", search);

const port = process.env.PORT || 5000;
module.exports = app.listen(port);

console.debug("App is listening on port " + port);
