class ArrayConvertor<T> {
    _elms: Array<T>;
    constructor(elms: Array<T>) {
        this._elms = elms;
    }
    array2string(): string {
        let text = "";
        for (let i = 0; i < this._elms.length; i++) {
            if (i > 0)
                text += " ";
            text += this._elms[i].toString();
        }
        return text;
    }

    getValue(elms: Array<T>, index: number): T {
        return elms[index];
    }
}

var arr = [1, 2];
//var arr= [1, 2, "hello"]; // 문자열 요소는 추가할 수 없음
var numConvertor = new ArrayConvertor<number>(arr);
console.log(numConvertor.array2string());
console.log(numConvertor.getValue(arr, 0)); // 첫번째 인수는 숫자 타입 배열만 전달 가능


var arr2 = new Array<string>();
arr2.push("a");
arr2.push("b");
//arr2.push(1234); //숫자 타입인 값은 추가할 수 없음 (선언된 배열에 타입이 없으면 추가 가능)
var stringConvertor = new ArrayConvertor<string>(arr2);
console.log(stringConvertor.array2string());
console.log(stringConvertor.getValue(arr2, 0));// 첫번째 인수는 문자열 타입 배열만 전달 가능