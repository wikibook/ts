class Banana {
    get() {
        return true;
    }
}
class Animal {
    constructor(name, leg) {
        this.name = name;
        this.leg = leg;
    }
    getLeg() {
        return this.leg;
    }
}
class Monkey extends Animal {
    constructor(name, leg) {
        super(name, leg);
    }
    isClimbing() {
        return true;
    }
    isEat() {
        let banana = new Banana();
        if (banana.get()) {
            return true;
        }
        else {
            return false;
        }
    }
}
var monkey = new Monkey("Lemur", 2);
console.log(monkey.isClimbing()); // IS-A
console.log(monkey.isEat()); // HAS-A
