var Namespace1;
(function (Namespace1) {
    class Info {
        constructor(name) {
            this.name = name;
        }
    }
    Namespace1.Info = Info;
})(Namespace1 || (Namespace1 = {}));
var Namespace2;
(function (Namespace2) {
    class Info {
        constructor(name) {
            this.name = name;
        }
        hello() {
            var one = new Namespace1.Info(this.name);
            return one.name;
        }
    }
    Namespace2.Info = Info;
})(Namespace2 || (Namespace2 = {}));
var two = new Namespace2.Info("Cat");
console.log(two.name);
