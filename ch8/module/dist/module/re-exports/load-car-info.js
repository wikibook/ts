import { CarInfo } from "./car-info.module";
CarInfo.Hello();
var car = new CarInfo.Car("My Car");
console.log(car.name);
var engine = new CarInfo.Engine("My Engine");
console.log(engine.name);
