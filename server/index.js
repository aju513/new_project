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
  res.send(file);
});
app.post("/api", (req, res) => {
  console.log(req.body);
  if (req.body[1].lastname) {
    file[1].lastname = req.body[1].lastname;
  }
  if (req.body[0].firstname) {
    file[0].firstname = req.body[0].firstname;
  }
  if (req.body[2].telephone) {
    file[2].telephone = req.body[2].telephone;
  }
  console.log(file);
  fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
    if (err) return console.log(err);
  });
  res.send("");
});

app.listen(8000, () => {
  console.log("server running");
});
