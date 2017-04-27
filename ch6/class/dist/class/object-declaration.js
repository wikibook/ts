class Rectangle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getArea() {
        return this.x * this.y;
    }
}
var rectangle = new Rectangle(1, 5);
var area = rectangle.getArea();
console.log(area);
