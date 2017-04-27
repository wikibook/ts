class Parent {
    constructor() { }
    myValue(value) {
        console.log("Parent :", value);
    }
}
class Child extends Parent {
    constructor() { super(); }
    myValue(value) {
        super.myValue(value);
        console.log("Child :", value);
    }
}
var myChild = new Child();
myChild.myValue("hello");
