const UNIQUE_KEY = Symbol();
let obj = {};

obj[UNIQUE_KEY] = 1234;
console.log(obj[UNIQUE_KEY]);
console.log(obj);

/*
tsconfig.json의 target이 es6 이상이어야 합니다.
*/