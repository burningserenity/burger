// Dependencies
var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Express configuration
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static(path.join(__dirname + '/node_modules')));

