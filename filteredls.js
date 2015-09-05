var fs = require('fs');
var path = require('path');

var pathString = path.normalize(process.argv[2]);
var extension = '.' + process.argv[3];

fs.readdir(pathString, function(err, data) {
	for (var i = 0; i < data.length; i++) {
		if (path.extname(data[i]) === extension) {
			console.log(data[i]);
		}
	}
});;
