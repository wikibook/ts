class XY {
    x: number = 1;
    y: number = 5;

    get getX() {
        return this.x;
    }

    hello() {
        return "hello";
    }

    // 예외적으로, 매개변수는 제한자 생략시 디폴트 제한자가 private이 됩니다.
    constructor(z: number = 10) { }

    getZ(){
        // 매개변수에 제한자가 생략한 경우 생성자 외부에서 호출 불가
        //console.log(this.z); 
    }
}

class XYZ extends XY {
    constructor() {
        super();
        console.log(this.x, this.y, this.getX, this.hello());
        //여기서 this.z는 호출 불가합니다.
    }
}

var myXY = new XY();
console.log(myXY.x, myXY.y, myXY.getX, myXY.hello());
var myXYZ = new XYZ();