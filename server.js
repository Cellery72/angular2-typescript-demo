// import applicable node modules
var express = require('express'),
	app = express(),
	path = require('path'),
	bodyParser = require('body-parser');

// specify port 
var port = 3000;

// set up Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// host static files
app.use('/', express.static(__dirname + '/build'));


// catch all route 
app.get('/*', function (req, res) {
	res.sendFile(__dirname + '/build/index.html');
});

//Connection
app.listen(port, function () {
	console.log('Listening on http://localhost:' + port);
	console.log('Stop Server with CTRL + C');
});