interface Person{
    name: string;
    city: string;
}

var person4:Person[]= [
    { name: "a", city: "seoul" },
    { name: "b", city: "daejeon" },
    { name: "c", city: "daegu" }
];

console.log(JSON.stringify(person4));