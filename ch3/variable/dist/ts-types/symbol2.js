const UNIQUE_KEY = Symbol();
let obj = {};
obj[UNIQUE_KEY] = 1234;
console.log(obj[UNIQUE_KEY]);
console.log(obj);
