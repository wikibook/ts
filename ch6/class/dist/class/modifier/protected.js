class Car {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class SuperCar extends Car {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(this.getName()); //호출 가능
    }
}
var mySuperCar = new SuperCar("MySuperCar");
//mySuperCar.getName(); // 호출 불가!
/*
테스트 시는 주석을 모두 해제해 줍니다.
*/ 
