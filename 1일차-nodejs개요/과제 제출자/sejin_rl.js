const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
		    input: fs.createReadStream('input.txt')
				});

var i = 0;

rl.on('line', function (line) {
		 i++;
		    console.log(i, line);
				});
