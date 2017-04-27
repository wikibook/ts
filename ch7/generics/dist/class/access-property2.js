class Profile2 {
    constructor() {
        this.name = "happiness!";
    }
}
class Accessor2 {
    get(obj) {
        return obj.name;
    }
}
let ac2 = new Accessor2();
console.log(ac2.get(new Profile2()));
