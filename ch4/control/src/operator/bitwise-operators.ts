let value: number = 2;

var value1: number = value&value; // & (and 연산자)
var value2: number = value|value; // | (or 연산자)
var value3: number = value^value; // ^ (XOR 연산자)
var value4: number = ~value;  // ~ (compliment 연산자)
var value5: number = value << 1; // << (왼쪽 쉬프트 연산자)
var value6: number = value >> 1; // >> (오른쪽 쉬프트 연산자)

console.log("1번 : ",typeof value1, value1);
console.log("2번 : ",typeof value2, value2);
console.log("3번 : ",typeof value3, value3);
console.log("4번 : ",typeof value4, value4);
console.log("5번 : ",typeof value5, value5);
console.log("6번 : ",typeof value6, value6);