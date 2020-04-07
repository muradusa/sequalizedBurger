var express = require("express");

var db = require("./models");

var app = express();

app.use(express.static("public"));

//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");