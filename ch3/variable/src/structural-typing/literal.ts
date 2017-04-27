interface Person {
    name: string;    
}

class Student {
    name: string;
}

let info = { name : "happy" }
let p1:Person = info;
let p2:Student = info;
console.log(p1.name);
console.log(p2.name);