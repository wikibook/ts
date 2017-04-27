const hello = Symbol('hello');
const hello2 = Symbol('hello');
console.log(hello === hello2);
console.log(hello,hello2);
console.log(typeof hello);

/*
tsconfig.json의 target이 es6 이상이어야 합니다.
*/