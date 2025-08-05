/*프로그래머스
두 수의 합 구하기
두 수의 차 구하기
두 수의 곱 구하기
몫 구하기
두 수의 나눗셈
숫자 비교하기
분수의 덧셈
나머지 구하기
짝수는 싫어요*/


let a = 7;
let b = 2;




let sum = a + b;
console.log(sum);
//합

let diff = a - b;
console.log(diff);
//차

let product = a * b;
console.log(product);
//곱

let quotient = Math.floor(a / b);
console.log(quotient);
//몫

let division = a / b;
console.log(division)
//나누기

let compare = a === b;
console.log(compare)
//숫자비교1

let compare2 = a != b;
console.log(compare2)
//숫자비교2

let compare3 = a > b;
console.log(compare3)
//숫자비교3


//분모를 맞춰야함 분모끼리 곱함 그리고 첫 번째 분자에 두번쨰 분모 곱함 두번쨰 분자에 첫번쨰 분모를 곱함
let c = 2
let d = 1
let e = 2
let f = 1

let fractionsum = d/c + f/e;
console.log(fractionsum);
//분수 덧셈(야매)


let remainder = a % b;
console.log(remainder);
//나머지


//짝수는 싫어요 (작업예정)


