type myArrayType = Array<number|boolean>;
let myArray: myArrayType = [1,true];
console.log(myArray.toString());
console.log(typeof myArray[0], typeof myArray[1]);