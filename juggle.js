var http = require('http');
var bl = require('bl');

var count = 0;

var results = [];

var httpGet = function(pos) {
	http.get(process.argv[pos + 2], function (response) {
			response.pipe(bl (function (err, data) {
				results[pos] = data.toString();
				count++;

				if (count === 3) {
					for (var j = 0; j < results.length; j++) {
						console.log(results[j]);
					}
				}
				
			}));
	});
}

for (var i = 0; i < 3; i++ ) {
	httpGet(i);	
}



