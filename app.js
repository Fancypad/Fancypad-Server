'use strict'
var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
// All routes go through here!
require('./routes');

app.listen(3000);
