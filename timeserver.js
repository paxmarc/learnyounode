var net = require('net');
var strftime = require('strftime');

var server = net.createServer( function (socket) {
	socket.end(strftime("%Y-%m-%d %H:%M\n", new Date()))
});
server.listen(Number(process.argv[2]));