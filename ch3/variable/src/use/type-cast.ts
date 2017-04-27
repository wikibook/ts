let mynum:any = '1';
let num1 = + mynum;
let num2 = Number(mynum);
let num3 = parseInt(mynum);

console.log(`${num1} ${typeof num1}`);
console.log(`${num2} ${typeof num2}`);
console.log(`${num3} ${typeof num3}`);

let num4:number = <number>mynum;
let num5:number = mynum as number;
console.log(`${num4} ${typeof num4}`);
console.log(`${num5} ${typeof num5}`);