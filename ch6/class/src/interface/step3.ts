class Person3 {    
    public full: string;
    constructor(public name: string, public city: string) {
        this.full=name+"("+city+")";
     }
}

var person3: Person3[] = [
    new Person3("kim", "seoul"),
    new Person3("park", "daejeon"),
    new Person3("jeong", "daegu")];

console.log(JSON.stringify(person3));