namespace Namespace1 {
    export class Info {
        constructor(public name: string) { }
    }
}

namespace Namespace2 {
    export class Info {
        constructor(public name: string) {

        }
        hello() {
            var one = new Namespace1.Info(this.name);
            return one.name;
        }

    }
}

var two = new Namespace2.Info("Cat");
console.log(two.name);