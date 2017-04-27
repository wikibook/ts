function getValue(obj, key) {
    return obj[key];
}
let numbersType = { one: 1, two: 2 };
console.log(getValue(numbersType, "one"));
