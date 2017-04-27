function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let numbersType = { one: 1, two: 2};

console.log(getValue(numbersType, "one"));
//console.log(getValue(numbersType, "happy")); //에러

/*
테스트시에는 주석을 해제하고 테스트를 진행합니다.
*/