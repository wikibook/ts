class Circle {
    static getArea(x) {
        return x * x * Circle.pi;
    }
}
Circle.pi = 3.14;
console.log(Circle.pi);
console.log(Circle.getArea(3));
