var url = require('url');
var http = require('http');

var server = http.createServer(function (req, res) {
	if (req.method != 'GET')
		res.end("send me a GET request!\n");

	var reqObj = url.parse(req.url, true);
	

	if (reqObj.pathname === "/api/parsetime") {
		var timeString = reqObj.query.iso;
		var date = new Date(timeString);

		var resObj = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		}
		res.writeHead(200, { 'Content-Type': 'application/json'} );
		res.end(JSON.stringify(resObj));

	} else if (reqObj.pathname === "/api/unixtime") {
		var timeString = reqObj.query.iso;
		var date = new Date(timeString);

		var resObj = {
			"unixtime": date.getTime()
		}

		res.writeHead(200, { 'Content-Type': 'application/json'} );
		res.end(JSON.stringify(resObj));

	} else {
		res.end(reqObj.pathname + "\n");
	}
})

server.listen(Number(process.argv[2]));