var fs = require('fs');

var fileToRead = process.argv[2];

fileText = fs.readFileSync(fileToRead).toString();

console.log(fileText.split('\n').length - 1);