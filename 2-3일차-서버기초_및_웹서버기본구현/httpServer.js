/**
 * 기본 구조
 */
var http = require('http');

// 웹 서버 객체를 만든다.
var server = http.createServer();

server.on('request', function(req, res) {
    console.log('클라이언트 요청이 들어왔습니다.');
    var str = [];

    req.on('data', function(data) {
        str.push(data);
    }).on('end', function() {
        res.write(str.toString());
        res.end();
    });
});

// 웹 서버를 시작하여 3000번 포트에서 대기.
var port = 3000;
// 서버 listening 시작.
server.listen(port, function() {
    console.log('웹 서버가 시작되었습니다. : %d', port);
});



// 서버 종료 이벤트 처리
server.on('close', function() {
    console.log('서버가 종료됩니다.');
});
