class Square2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getArea() {
        return this.x * this.y;
    }
}
var square2 = new Square2(5, 5);
console.log("x :", square2.x);
console.log("area : ", square2.getArea());
//square2.y는 비공개 이므로 접근 할 수 없습니다. 
