interface IAnimal {    
    leg:number;
}

interface IBird extends IAnimal {    
    wing:number;
    readonly numWing: number;
}

class Sparrow  implements IBird {    
    leg:number;    
    wing:number;
    constructor(leg:number,wing:number) { 
        this.leg=leg;
        this.wing=wing;
    }

    get numWing(){
        return this.wing; 
    }    
}

let mSparrow = new Sparrow(2,2);
console.log(mSparrow.numWing);
console.log(mSparrow.leg, mSparrow.wing);