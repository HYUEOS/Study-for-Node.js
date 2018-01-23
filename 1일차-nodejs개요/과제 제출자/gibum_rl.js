var fs = require('fs');
var readline = require('readline');

function processFile(filename){
  var lineReader=readline.createInterface({
    input : fs.createReadStream('./input.txt'),
    // output : process.output
  });
let counter =0;

  lineReader.on('line',function(line){
    ++counter;
    var token = "";
    token+=counter.toString()+" : ";
    token+=line.split(' ');
    if(line.split(' ').toString()!=""){
    console.log(token);
  }
  });
}

  processFile('./hello.txt');
