class BOX {
    constructor(x) {
        this.x = x;
    }
}
class MyBOX extends BOX {
    constructor(x) {
        super(x);
    }
    print() {
        super.x = 10;
        console.log(super.x);
        console.log(this.x);
    }
}
var myBox = new MyBOX(10);
myBox.print();
