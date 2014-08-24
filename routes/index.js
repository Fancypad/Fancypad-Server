'use strict'

var app = require('../app')

app.get('/', function(req, res) {
	res.send('Hello!');
});

app.get('/users', function(req, res) {
	res.send('This is the users directory.');
});


