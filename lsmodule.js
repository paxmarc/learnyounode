var fs = require('fs');
var path = require('path');

var filterls = function(dirname, extension, callback) {

	var pathString = path.normalize(dirname);
	extension = '.' + extension;

	fs.readdir(pathString, function(err, data) {
		if (err) {
			return callback(err);
		}
		var returnData = Array();
		for (var i = 0; i < data.length; i++) {
			if (path.extname(data[i]) === extension) {
				returnData.push(data[i]);
			}
		}
		return callback(null, returnData);
	});
}

module.exports = filterls;
