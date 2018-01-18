# 1일차
NodeJS 로 알아보는 서버 스터디 1일차입니다.

## 목차
1.  NodeJS 를 설치합니다. 또한, 자신에게 맞는 툴을 함께 설치해봅니다.
2.  NodeJS 기초 문법 (변수, 함수)
    -   링크 : <https://www.w3schools.com/js/default.asp>
3.  NodeJS 의 이벤트 기반 입출력, 비동기 입출력, 모듈에 대해 알아봅니다.
4.  앞서 다뤘던 별찍기를 통해 이벤트 기반 입출력에 대해 정확히 파악합니다.
5.  file 입출력을 다루고, 비동기 입출력을 이해합니다. 또한 동기 함수도 존재함을 파악합니다.
6.  덧셈 함수를 만들고 모듈로 만들어보며 모듈에 대해 이해합니다.

## 1. Node.js 설치
링크 : <https://nodejs.org/ko/>

## 2. Node.js 문법
### 개요
우리는 node.js 를 통해 서버를 배우는 스터디입니다.
따라서 javascript 는 최소한의 문법만 익히려고 합니다.

javascript 에 관해 궁금하시고 더욱 깊게 다뤄보고 싶으신 분들은 개인적으로 연락주시면 관련 링크를 드리겠습니다.

### 변수
선언과 할당은 아래와 같이 합니다.
```js
var x, y;          // How to declare variables
x = 5; y = 6;      // How to assign values
z = x + y;         // How to compute values
```
변수 타입 종류
```js
var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x7 = function(){}; // new function object
```

### javascript 함수
함수 기본
<https://www.w3schools.com/js/js_functions.asp>

콜백 함수란? (필기해주세요.)

## 3. Node.js 이벤트 기반 입출력, 비동기 입출력, 모듈
필기해주세요.

## 4. 별찍기
힌트: process.on('readable', 콜백()); 이 scanf 역할을 합니다.
## 5. file 입출력
## 6. 모듈 만들기

## 과제

이번 시간에 다 다루지 못한다면 다음시간에 마저 다룰 것이고,
과제는 파일의 내용을 한줄씩 읽어 들여 console 에 출력하는 기능을 함수로 만드는 것입니다.

hint : readline 모듈을 이용하세요. 구글링!

심화 과제1 : 한줄씩 읽어 들여 각 줄 앞에 시간을 붙여 한 파일로 저장해보세요!

심화 과제2 : winston 모듈을 활용하여 logger 모듈을 만들고 log 를 파일로 저장해보세요!

__심화 과제는 필수 구현이 아닙니다. 여유가 되시는분만 수행해주세요.__

## 강의용 노트
-   Javascript 문법에선 비동기성과 hoisting, scope, 변수와 콜백에 관해서까지만 다룹니다.
-   이번 시간의 목표는 NodeJS 를 설치하고, 경험해보며, 특색에 조금이라도 익숙해지게 하는 것입니다.
-   다음 시간에는 웹서버를 구현해볼 예정입니다.
    -   주소로 요청 받음 -> 요청 처리 -> 응답 3 박자를 구성해봅니다.
    -   예제 3 가지 정도를 다룹니다.
