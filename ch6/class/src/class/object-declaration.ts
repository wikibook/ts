class Rectangle{

    x: number;
    y: number;
    
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }    
	
	getArea(){
		return this.x * this.y;
	}
}

var rectangle = new Rectangle(1,5);
var area: number = rectangle.getArea();
console.log(area);