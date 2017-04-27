function colors(first, ...rest) {
    return first + " " + rest.join(" ");
}
let myColor = colors("red", "orange", "yellow");
console.log(myColor);
