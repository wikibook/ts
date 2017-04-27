class Profile {
    constructor() {
        this.name = "happiness!";
    }
}
class Accessor1 {
    get(obj) {
        var objName = obj instanceof Profile ? obj.name : obj;
        return objName;
    }
    getKEY(obj) {
        return obj['name'];
    }
}
let ac = new Accessor1();
console.log(ac.get(new Profile()));
console.log(ac.getKEY(new Profile()));
