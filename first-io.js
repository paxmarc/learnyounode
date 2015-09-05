var fs = require('fs');

var fileContent = fs.readFileSync(process.argv[2]).toString();
var linesArray = fileContent.split('\n');

console.log(linesArray.length - 1);