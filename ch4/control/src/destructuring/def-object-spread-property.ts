let x = 1;
let y = 2;
let z = [3,4,5];
let all = { x, y, ...z };
console.log(all);

let all2 = { ...z, x, y };
console.log(all2);