/// <reference path="car1.ts" />
var Car;
(function (Car) {
    var wheels;
    console.log(Car.auto);
    class Taxi {
    }
})(Car || (Car = {}));
console.log(Car.auto);
//console.log(Car.wheels); // 접근 불가 
