function myIndexOf2(x: number | string,y: string) {
    if (typeof x === 'string') {        
        return x.indexOf(y);        
    }
}

console.log(myIndexOf2("hello","e"));