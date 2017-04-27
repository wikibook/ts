function max<T>(x: T, y: T) {
        return (x > y) ? x : y;
}

console.log(max<number>(10, 20));
console.log(max<string>("10", "20"));

console.log(max(10, 20));
console.log(max("10", "20"));

//max(10, "20");

/*
테스트시 주석 해제
*/