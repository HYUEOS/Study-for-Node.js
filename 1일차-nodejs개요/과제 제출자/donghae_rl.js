const readline = require('readline');
const fs = require('fs');
var i = 1;

const rl = readline.createInterface({
		     input: fs.createReadStream(process.argv[2])
				 });

rl.on('line', function (line) {
		    console.log(i + ":", line);
				    i++;
						});

