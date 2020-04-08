const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { databaseConnect } = require("./db");
const { search, feed } = require("./routers");

console.log(global.gConfig);

const app = express();

databaseConnect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/feed", feed);

app.use("/api/search", search);

const port = process.env.PORT || 5000;
module.exports = app.listen(port);

console.log("App is listening on port " + port);
