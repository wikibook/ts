function ambiguity4(num) {
    return num;
}
var result4 = ambiguity4("1000");
result4 = result4 + 1000;
console.log(typeof result4, result4);
