var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (request, response) {
	var filePath = path.normalize(process.argv[3]);
	var fileStream = fs.createReadStream(filePath);
	fileStream.pipe(response);
});

server.listen(Number(process.argv[2]));