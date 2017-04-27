class Parent {
    constructor() { }
    myValue(value: any) {
        console.log("Parent :", value);
    }
}
class Child extends Parent {
    constructor() { super(); }
    myValue(value: string) {
        super.myValue(value);
        console.log("Child :", value);
    }
}

var myChild = new Child();
myChild.myValue("hello");