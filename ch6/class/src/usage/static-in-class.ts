class Circle{
    static pi = 3.14;
    static getArea(x){
        return x * x * Circle.pi;
    }
}

console.log(Circle.pi);
console.log(Circle.getArea(3));