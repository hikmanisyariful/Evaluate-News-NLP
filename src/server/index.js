require("dotenv").config();

const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const apiKey = process.env.API_KEY;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/api", function(req, res) {
  res.send({ apiKey });
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
  console.log("Example app listening on port 8081!");
});
