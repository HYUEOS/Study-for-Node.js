/**
 * TITLE: 별찍기 예제
 * AUTHOR: s0metimes (Sihwan Oh)
 * CREATED: 2018.01.17
 * LAST UPDATED: 2018.01.17
 * Description: node.js 로 별찍기 하는 프로그램이다.
 */

var star = "*";
var blank = " ";
var line = "";
var i = 0;
var j = 0;

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        chunk = parseInt(chunk);
        if (Number.isInteger(chunk)) {
            if ( chunk < 0 ){
                console.log("exit");
                process.exit(1);
            }
            for( i = 0; i < chunk; i++) {
                line = "";
                for ( j = chunk - i; j > 0; j-- ) {
                    line += blank;
                }
                for ( j = 0; j < 2*i + 1; j++ ) {
                    line += star;
                }
                console.log(line);
            }
            console.log('height: ');
        }
        else {
            console.log('err: input is not a number');
        }
    }
});
