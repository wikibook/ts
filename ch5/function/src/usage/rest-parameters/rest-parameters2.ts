function colors(first: string, ...rest: string[]) {    
    return first + " " + rest.join(" ");
}

let myColor = colors("red","orange","yellow");
console.log(myColor);