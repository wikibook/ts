class Point {
    getX(x) {
        if (typeof x === 'number') {
            return x;
        }
        else if (typeof x === 'string') {
            return x;
        }
    }
}
var p = new Point();
console.log(p.getX());
console.log(p.getX("hello"));
console.log(p.getX(123));
