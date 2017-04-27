let x = 1;
let y = 2;
let z = [3, 4, 5];
let all = Object.assign({ x, y }, z);
console.log(all);
let all2 = Object.assign({}, z, { x, y });
console.log(all2);
