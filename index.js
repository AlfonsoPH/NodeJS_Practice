const http = require('http');
const dotenv = require('dotenv');
const express = require('express');

const app = express();

dotenv.config();
port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.get('/hello', function(req, res) {
	res.send('Hello World');
});

app.get('/home.html', function(req, res) {
	res.sendFile(__dirname + '/home.html');
});

app.get('/profile.html', function(req, res) {
	res.sendFile(__dirname + '/profile.html');
});

app.listen(port, hostname, function() {
	console.log('Server running at: ');
	console.log('http://' + hostname + ':' + port);
});