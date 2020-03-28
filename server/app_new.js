const express = require("express");

const app = express();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.get("/", function(req, res) {
  res.send({ message: "Hellow mtf!" });
});

app.get("/posts", function(req, res) {
  console.log("this stuff is being called");
  res.send([
    {
      id: 0,
      title: "Lorem ipsum",
      content: "Dolor sit amet",
      author: "Marcin"
    },
    {
      id: 1,
      title: "Vestibulum cursus",
      content: "Dante ut sapien mattis",
      author: "Marcin"
    }
  ]);
});

app.listen(8080);
