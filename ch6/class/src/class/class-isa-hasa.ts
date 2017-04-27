class Banana{
    get(){
        return true;
    }
}
class Animal {
    constructor(public name: string, public leg: number){}    
    
    getLeg(): number{ 
        return this.leg; 
    }
    
}

class Monkey extends Animal{
    constructor(name: string, leg: number) { 
        super(name, leg); 
    }
    
    isClimbing(){
        return true;
    }

    isEat(){
        let banana=new Banana();
        if(banana.get()){
            return true;
        }else{
            return false;
        }
    }

}

var monkey=new Monkey("Lemur",2);
console.log(monkey.isClimbing()); // IS-A
console.log(monkey.isEat()); // HAS-A