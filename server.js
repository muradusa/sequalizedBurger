var express = require("express");
//trying github commit with mac
var db = require("./models");

var app = express();

app.use(express.static("public"));

//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("App now listening on port: ", PORT);
    });
});