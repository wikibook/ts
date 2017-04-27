class Square {
    constructor(c = 10, d = 100) {
        this.c = c;
        this.d = d;
        this.a = 1;
        this.b = 5;
    }
}
var square = new Square();
console.log(square.a, square.c);
