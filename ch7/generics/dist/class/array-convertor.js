class ArrayConvertor {
    constructor(elms) {
        this._elms = elms;
    }
    array2string() {
        let text = "";
        for (let i = 0; i < this._elms.length; i++) {
            if (i > 0)
                text += " ";
            text += this._elms[i].toString();
        }
        return text;
    }
    getValue(elms, index) {
        return elms[index];
    }
}
var arr = [1, 2];
var numConvertor = new ArrayConvertor(arr);
console.log(numConvertor.array2string());
console.log(numConvertor.getValue(arr, 0));
var arr2 = new Array();
arr2.push("a");
arr2.push("b");
var stringConvertor = new ArrayConvertor(arr2);
console.log(stringConvertor.array2string());
console.log(stringConvertor.getValue(arr2, 0));
