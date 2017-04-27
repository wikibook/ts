class Square{
    public a: number = 1;
    private b: number = 5;
    constructor(public c:number = 10,private d:number = 100){}
}

var square = new Square();
console.log(square.a, square.c);