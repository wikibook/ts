class Student2 {
    get name() {
        return this._name.toUpperCase();
    }
    set name(name) {
        this._name = name;
    }
}
var student2 = new Student2();
student2.name = "happy";
if (student2.name) {
    console.log(student2.name);
}
