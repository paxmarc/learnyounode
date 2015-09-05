var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err) {
		console.log('error');
	} else {
		var noLines = data.split('\n').length - 1;
		console.log(noLines);
	}
});

