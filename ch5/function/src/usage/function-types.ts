let myConcat = function (str1: string, str2: string): string { return str1 + str2; };
console.log(myConcat("hello", " world"));

let myConcat2: (str1: string, str2: string) => string = myConcat;
console.log(myConcat2("hello", " world"));

let myConcat3: (str1: string, str2: string) => string = (str1: string, str2: string): string => { return str1 + str2 }
console.log(myConcat3("hello", " world"));

