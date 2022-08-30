const fs = require("fs");
const express = require("express");
const app = express();
const fileName = "../client/src/datajson.json";
const file = require(fileName);
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  console.log(file);
  res.send(file);
});
app.post("/api", (req, res) => {
  const request = req.body;

  request.forEach((element, i) => {
    file[i].value = element.value;
  });
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
  });
  res.send("");
});

app.listen(8000, () => {
  console.log("server running");
});
