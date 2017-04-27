class Student{    
    name: string; // 로직 추가 불가
}

var student = new Student();
student.name = "happy";

if(student.name){
    console.log(student.name);
}