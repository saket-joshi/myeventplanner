/**
* @description : Main entry point for the server
* @author : Saket Joshi
* @version : 1.0
*/

"use strict";

var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(express.static(path.join(__dirname, "app")));

app.listen(3000, function() {
    console.log("Node server started on port 3000");
});