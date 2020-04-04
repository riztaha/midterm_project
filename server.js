// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");
// const cookieSession = require("cookie-session");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const menuRoutes = require("./routes/menu");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/menu", menuRoutes(db));

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  res.render("index");
});

// Menu Page
app.get("/menu", (req, res) => {
  res.render("menu");
});

//template file do ajax request make a request to /api/menu... this is done in app.js

// app.post("/menu", (req, res) => {
//   ITEMS EDITED FROM rest-menu
// })

app.get("/cart", (req, res) => {
  res.render("cart");
});

// app.post("/cart", (req, res) => {
//   ITEMS EDITED FROM cart
// })

app.get("/rest-menu", function (req, res) {
  res.render("rest-menu");
});

app.get("/orders", function (req, res) {
  res.render("orders");
});

// app.post("/orders", function (req, res) {
//     POST ORDER INFO/TIME
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
