function check(p) {
    if (typeof p === "number") {
        return p;
    }
    else if (typeof p === "string") {
        return p;
    }
    else {
        return -1;
    }
}
console.log(typeof check(1), check(1));
console.log(typeof check("1"), check("1"));
console.log(typeof check(true), check(true));
