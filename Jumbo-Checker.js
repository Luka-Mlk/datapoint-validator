const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const checker = require("./handlers/checker");

const app = express();

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
// app.use(express.static("./public"));
// app.use(express.static("./views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.get("/", checker.home);

app.post("/data", checker.filter);

app.listen("3030", (err) => {
  if (err) console.log(err);
  console.log("App started on http://localhost:3030");
});
