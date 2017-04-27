let myConcat = function (str1, str2) { return str1 + str2; };
console.log(myConcat("hello", " world"));
let myConcat2 = myConcat;
console.log(myConcat2("hello", " world"));
let myConcat3 = (str1, str2) => { return str1 + str2; };
console.log(myConcat3("hello", " world"));
