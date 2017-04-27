const neverTouch = function():never {
    while (true) {
        console.log("Never");       
    }
    //console.log();
};
neverTouch();


/*
console.log() 코드는 무한 루프로 인해 닿을 수 없는 코드입니다. 
주석 해제시 Unreachable code detected 에러가 발생합니다.
*/