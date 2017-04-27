let one = (a: string) => 1;
let two = (c: string, d: number) => 2;

two = one;
//one = two; // 에러 - 타입 호환 불가

let three = () => ({name: "happy"});
let four = () => ({name: "happy", country: "korea"});

three = four;
//four = three; // 에러 - 타입 호환 불가

/*
    테스트시 주석을 해제 하고 테스트합니다.
*/