const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const input = req.query.input;


  res.send("<h1>" + input + "</h1>");
});

app.listen(3000);