import * as ns from "./car1";

namespace Car {
    var wheels: number;
    console.log(ns.Car.auto);
    class Taxi implements ns.Car.ICar {
        name: string;
        vendor: string;
    }
}

console.log(ns.Car.auto);