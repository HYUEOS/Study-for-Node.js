var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: fs.createReadStream('input.txt')
});
var i = 0;
rl.on('line', function(line) {
  i++;
  console.log(i+': '+line);
});
