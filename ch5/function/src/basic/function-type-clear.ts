function clarType(num: number): number {
    return num;
}

var clearValue = clarType(1000);
clearValue = clearValue + 1000;
console.log(typeof clearValue, clearValue);