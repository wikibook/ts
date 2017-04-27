class Animal {
    name: number;
    constructor(name: string, age: number) { }
}

class Bird {
    name: number;
    constructor(numFeet: number) { }
}

let animal: Animal;
let bird: Bird;

animal = bird; // 타입 호환이 가능
bird = animal; // 타입 호환이 가능