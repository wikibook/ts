interface IName {
    name: string;
}

class Profile implements IName {
    name: string = "happiness!";
}

class Accessor1<T> {

    get(obj: T) {
        var objName = obj instanceof Profile ? obj.name : obj;
        return objName;
    }

    getKEY<T>(obj: T) {
        return obj['name'];
    }
}

let ac = new Accessor1<IName>();
console.log(ac.get(new Profile()));

console.log(ac.getKEY<IName>(new Profile()));