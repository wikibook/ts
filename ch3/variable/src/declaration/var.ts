var a = "hello"; // 전역 이름 공간에 선언됨

function say(){
    var a = "hello2"; // 함수 이름 공간에 선언됨    
}

say();
console.log(a);