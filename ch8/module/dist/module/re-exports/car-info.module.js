import { MyCar as SuperCar, SuperEngine } from "./my-car";
export var CarInfo;
(function (CarInfo) {
    CarInfo.Car = SuperCar;
    CarInfo.Engine = SuperEngine;
    function Hello() {
        console.log("hello");
    }
    CarInfo.Hello = Hello;
})(CarInfo || (CarInfo = {}));
