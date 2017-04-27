class Student2{    
    _name: string; // 로직 추가 불가
    get name(): string{
        return this._name.toUpperCase();
    }

    set name(name: string){
        this._name = name;
    }

}

var student2 = new Student2();
student2.name = "happy";

if(student2.name){
    console.log(student2.name);
}