# 2~3일차
NodeJS 로 알아보는 서버 스터디 2일차 및 3일차입니다.

http 웹서버를 구현하기에 앞서 필요한 지식들을 학습합니다.

이후 기본적인 웹서버를 http 모듈을 이용하여 함께 같이 만들어보고 해당 웹서버 위에서
요청이 어떻게 오고 응답을 어떻게 처리하는지에 대해 학습합니다.

## 목차
1.  과제 설명을 진행합니다. (file 한줄씩 읽기, logger)
2.  지난 시간에 다루지 못한 모듈화 방법에 대해 알아봅니다.
3.  ip 주소와 포트에 대해 자세히 알아봅니다.
4.  도메인과 네임서버에 대해 알아봅니다.
5.  socket 이 무엇인지 알아보고 코드로 짜봅니다.
6.  http가 무엇인지 알고, http 모듈로 웹서버를 만들고 실행해봅니다.
7.  요청을 어떻게 받는지 보고, 그에 대한 응답을 해봅니다.

## 1. file 한줄씩 읽기 및 logger
기본 과제에 대한 설명은 코드를 보며 설명으로 대체합니다.

### logger
log 는 리포팅 역할을 해줍니다. 즉, 동작하는 프로그램의 상태를 모니터링하여 에러에 즉각 대응하거나
해킹 시도를 빠르게 감지할 수 있습니다.

### log level
-   FATAL : 프로그램이 중지될 수도 있는 치명적인 에러 이벤트
-   ERROR : 프로그램이 중지될 정도는 아닌 에러 이벤트
-   WARN : 잠재적인 위험
-   INFO : 대략적으로 프로그램의 진행 상황을 강조
-   DEBUG : 응용 프로그램을 디버깅하는 데 가장 유용한 세밀한 정보 이벤트
-   TRACE : DEBUG보다 세분화 된 정보 이벤트

### 참고 사이트들
-   log 데이터 관리의 중요성: <http://www.boan24.com/news/articleView.html?idxno=7156>
-   log 에서 의미 있는 텍스트를 뽑아 정렬하기: <http://www.dailysecu.com/?mod=news&act=articleView&idxno=4959>
-   winston logger 사용법: <http://mcpaint.tistory.com/198>

## 2. 모듈화
### 개요
만들고자 하는 모듈을 파일로 만들고 exports 객체의 속성이나 메소드를 정의해주면 모듈을 만들어 낼 수 있습니다.
그리고 만들어진 모듈을 전역 함수 require()를 이용하여 추출합니다.

### 모듈 만들기
#### exports 전역 변수
exports 전역 변수는 어디에서나 접근할 수 있게 정의된 변수입니다.

속성을 추가하는 방식으로 모듈을 만듭니다.

#### module.exports
module.exports 는 할당하는 방식으로 모듈을 만듭니다.

1.  exports 전역 변수로 모듈 만들기
```js
/**
 * file 명: customUser.js
 */
// exports 객체 속성으로 함수 추가
exports.getUser = function() {
    return {id : 'test01', name : '소녀시대'};
}

// exports 객체 속성으로 객체 추가
exports.group = {id : 'group01', name : '친구'};
```

2.  module.exports 로 모듈 만들기
```js
/**
 * file 명: customUser.js
 */

var user = {};
user.getUser = function() {
     return {id : 'test01', name : '소녀시대'};
}

user.group = {id : 'group01', name : '친구'};

// module.exports 에 user 객체를 할당
module.exports = user;
```

3.  모듈 사용하기
```js
// require() 함수는 exports 객체를 반환함
var customUser = require('./customUser');

function showUser() {
    return customUser.getUser().name + ', ' + customUser.group.name;
}

console.log('사용자 정보 : %s', showUser());
```

참고로 javascript 의 모든 변수는 객체라 할 수 있기 때문에 함수든 객체든 모듈로 만들 수 있습니다.

## 3. ip 주소, 포트

포트는 운영체제가 TCP/IP 네트워크에서 들어오는 트래픽을 컴퓨터 내에서 실행되고 있는 적절한 프로그램에 분배시키기 위해 할당되는 숫자를 말합니다.

-   포트: <http://memoweb.tistory.com/entry/%ED%8F%AC%ED%8A%B8%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%B3%B8%EC%A7%88-port>

-   ip주소: <http://it.donga.com/3106/>

## 4. 도메인과 네임서버
-   Domain Name Server (DNS): <https://xn--3e0bx5euxnjje69i70af08bea817g.xn--3e0b707e/jsp/resources/dns/dnsInfo.jsp>

-   DNS 영상: <https://opentutorials.org/course/228/1455>

-   도메인 기본: <http://blog.koreadaily.com/view/myhome.html?fod_style=B&med_usrid=webtell&cid=748897&fod_no=1>

-   도메인 심화: <https://www.linux.co.kr/unixwebhosting/multidomain/multidomain.htm>

## 5. 소켓 (Socket)
-   socket 정의: <https://m.blog.naver.com/PostView.nhn?blogId=goldenkingll&logNo=70106915167&proxyReferer=https%3A%2F%2Fwww.google.co.kr%2F>

```js
/// 서버
var net = require('net');
// 새로운 TCP 혹은 IPC 서버 생성
// 주의 : 소켓을 만드는 것이 아니다. 소켓을 감싸 언제든 상대편 소켓을 받을 수 있는 서버를 만드는 것이다.
// 콜백함수의 인자인 client 는 client socket 을 말하며,
// 연결된 client 에게 행할 기능들을 정의하는 용도로 사용된다.
var server = net.createServer( function(client){
    // client 로부터 data 가 write 됐을 때
    client.on('data', function(data) {
        console.log('client: ' + data.toString().trim());
    });

    // client 가 connection 을 종료했을 때
    client.on('end', function() {
        console.log('client disconnected');
        // 기본 모드에서는 클라이언트가 연결을 끊으면 client.end() 가 자동 호출된다.
    });

    console.log('client:' + client.address().address + ':' + client.address().port + 'is connected');

    // client 로 data write 하기
    client.write('hello client. I am server');


}).on('error', function(err) {
    throw err;
});

// 서버를 열고, client 의 연결을 기다린다.
server.listen( {
    host: 'localhost',  // 주소
    port: 8124,
    exclusive: true
}, function() {
    console.log('opened server on', server.address());
});
```

```js
// 클라이언트
var net = require('net');
// net.Socket 을 만든다. 만들고 해당 포트에 연결시킨다.
var server = net.createConnection({ port:8124 }, function() {
    console.log('connected to server!');
});

// server 로부터 data 가 write 됐을 때
server.on('data', function(data) {
    console.log('server: ' + data.toString().trim());
});

// 서버가 connection 을 종료했을 때
server.on('end', function() {
    console.log('disconnected from server');
});

// 서버로 data write 하기
server.write('hello server');
```

## 6. http 모듈로 웹서버 만들기

### HTTP란?
-   사이트1: <http://wiki.gurubee.net/pages/viewpage.action?pageId=26739929>
-   사이트2: <http://roydest.tistory.com/entry/HTTP%EB%9E%80>

### HTTP 모듈 사용 예시

```js
/**
 * 기본 구조
 */
 var http = require('http');

 // 웹 서버 객체를 만든다.
 var server = http.createServer();

 // 웹 서버를 시작하여 3000번 포트에서 대기.
 var port = 3000;
 // 서버 listening 시작.
 server.listen(port, function() {
     console.log('웹 서버가 시작되었습니다. : %d', port);
 });

 // 클라이언트 연결 이벤트 처리.
 server.on('connection', function(client) {
     var addr = client.address();
     console.log('클라이언트가 접속했습니다. : %s, %d', addr.address, addr.port);
 });

 // 클라이언트 요청 이벤트 처리
 server.on('request', function(req, res) {
     console.log('클라이언트 요청이 들어왔습니다.');
     console.dir(req);
 });

 // 서버 종료 이벤트 처리
 server.on('close', function() {
     console.log('서버가 종료됩니다.');
 });

```


## 7. http 모듈로 request, response 해보기
nodejs.org 에서 http 모듈을 보고 request, response 연습을 해보겠습니다. 구글링! (다 못하면 과제로 뿌리면 되지 뭐.. ㅎㅎㅎㅎㅎㅎㅎ 아니면 내일..?)


## 8. npm 및 express 모듈 설치
npm에 대해: <http://forum.falinux.com/zbxe/index.php?document_srl=572898&mid=lecture_tip>
express 설치:
<http://expressjs.com/ko/starter/installing.html>

## 과제

### 과제 1
클라이언트가 메모를 작성하고 저장을 누르면 해당 메모를 작성 시간과 함께 파일로 저장하는
기능을 만드세요. 파일명은 자유롭게...

클라이언트 쪽은 아래 코드를 이용하세요.

```html
<html>
    <head>
        <meta charset="utf-8">
        <title>메모하기</title>
    </head>
    <body>
        <form method="post" action="<!-- 제작한 nodejs 파일의 PATH -->">
            <input type="text">
            <input type="submit" value="제출">
        </form>
    </body>
</html>
```

__심화__ : 여러번 저장 버튼 클릭 시 같은 파일에 append
하는 방식으로 만들어보세요.

### 과제 2
소켓을 이용하여 서버와 클라이언트 간에 채팅하는 프로그램을 만드세요.

__심화__ : 여러명이서 함께 채팅할 수 있도록 단체 채팅을 만들어보세요.

__심-심화__ : 채팅에 방 개념을 부여해보세요.

__심화는 필수 구현이 아닙니다.__

## 강의용 노트
수욜날 최대한 개념 강의 위주로 진행하고, 실습은 목욜날 많이 진행한다.

소켓으로 채팅 구현이 처음이라 상당히 어렵게 다가올 수 있다. 이를 심화 과제로 돌리는 것도 고려해봐야할 것이다.

소켓 재설명, http 개념, http 모듈, 요청과 응답 까지 한 후 Node.js 의 3가지 특징인
1.  이벤트 기반 입출력
2.  비동기 입출력
3.  모듈과 패키지
에 대해 다시 한번 짚고 넘어간다.

http 모듈로 get 요청 처리, post 요청 처리에 대해 다뤄봐야한다.
