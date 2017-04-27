function concat(...rest: string[]) {    
    return rest.join("");
}

let myString = concat("a","b","c");
console.log(myString);