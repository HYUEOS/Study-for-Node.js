# 2일차
NodeJS 로 알아보는 서버 스터디 2일차입니다.

기본적인 웹서버를 http 모듈을 이용하여 함께 같이 만들어보고 해당 웹서버 위에서
요청이 어떻게 오고 응답을 어떻게 처리하는지에 대해 학습합니다.

## 목차
1.  과제 설명을 진행합니다. (file 한줄씩 읽기, logger)
2.  지난 시간에 다루지 못한 모듈화 방법에 대해 알아봅니다.
3.  ip 주소에 대해 자세히 알아봅니다.
4.  http 모듈로 웹서버를 만들고 실행해봅니다.
5.  요청을 어떻게 받는지 보고, 그에 대한 응답을 해봅니다.

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

## 3. ip 주소, 포트 및 도메인

포트는 운영체제가 TCP/IP 네트워크에서 들어오는 트래픽을 컴퓨터 내에서 실행되고 있는 적절한 프로그램에 분배시키기 위해 할당되는 숫자를 말합니다.

-   포트: <http://memoweb.tistory.com/entry/%ED%8F%AC%ED%8A%B8%EC%9D%98-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%B3%B8%EC%A7%88-port>

-   ip주소: <http://it.donga.com/3106/>

-   Domain Name Server (DNS): <https://xn--3e0bx5euxnjje69i70af08bea817g.xn--3e0b707e/jsp/resources/dns/dnsInfo.jsp>

-   DNS 영상: <https://opentutorials.org/course/228/1455>

-   도메인 기본: <http://blog.koreadaily.com/view/myhome.html?fod_style=B&med_usrid=webtell&cid=748897&fod_no=1>

-   도메인 심화: <https://www.linux.co.kr/unixwebhosting/multidomain/multidomain.htm>



## 4. http 모듈로 웹서버 만들기

### HTTP란?
-   사이트1: <http://wiki.gurubee.net/pages/viewpage.action?pageId=26739929>
-   사이트2: <http://roydest.tistory.com/entry/HTTP%EB%9E%80>

```js
/**
 * 기본 구조
 */
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
```


## 5. http 모듈로 request, response 해보기
nodejs.org 에서 http 모듈을 보고 request, response 연습을 해보겠습니다. 구글링!


## 과제

클라이언트가 메모를 작성하고 저장을 누르면 해당 메모를 작성 시간과 함께 파일로 저장하는
기능을 만드세요. 파일명은 자유롭게...

클라이언트 쪽은 아래 코드를 이용하세요.

```html
<html>
    <head>
        <title>
            메모하기
        </title>
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

__심화는 필수 구현이 아닙니다.__

## 강의용 노트
의외로 빨리 끝날 수 있다.

http 모듈로 get 요청 처리, post 요청 처리에 대해 다뤄봐야한다.
