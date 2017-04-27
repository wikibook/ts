class Square2{
    constructor(public x:number,private y:number){
    }
    getArea(){
        return this.x * this.y;
    }
}

var square2 = new Square2(5,5);
console.log("x :",square2.x);
console.log("area : ",square2.getArea());

//square2.y는 비공개 이므로 접근 할 수 없습니다.