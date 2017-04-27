interface IFilter<T> {
    unique(array: Array<T>): Array<T>;
}

class Filter<T> implements IFilter<T>{
    unique(array: Array<T>): Array<T> {
        return array.filter((v, i, array) => array.indexOf(v) === i); 
    }
}

var myFilter = new Filter<string>();
var resultFilter = myFilter.unique(["a", "b", "c", "a", "b"]);
console.log(resultFilter);