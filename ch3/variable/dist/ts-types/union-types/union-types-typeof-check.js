function myIndexOf2(x, y) {
    if (typeof x === 'string') {
        return x.indexOf(y);
    }
}
console.log(myIndexOf2("hello", "e"));
