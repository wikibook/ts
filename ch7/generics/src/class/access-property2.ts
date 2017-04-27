interface IName {
    name: string;
}

class Profile2 implements IName {
    name: string = "happiness!";
}

class Accessor2<T extends IName> {

    get(obj: T) {         
        return obj.name;
    }
}

let ac2 = new Accessor2();
console.log(ac2.get(new Profile2()));