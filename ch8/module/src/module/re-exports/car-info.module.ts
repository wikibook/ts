import { MyCar as SuperCar, SuperEngine } from "./my-car";

export namespace CarInfo{
    export var Car = SuperCar;
    export var Engine = SuperEngine;

    export function Hello(){
        console.log("hello");
    }
}