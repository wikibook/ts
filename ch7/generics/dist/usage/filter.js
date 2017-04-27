class Filter {
    unique(array) {
        return array.filter((v, i, array) => array.indexOf(v) === i);
    }
}
var myFilter = new Filter();
var resultFilter = myFilter.unique(["a", "b", "c", "a", "b"]);
console.log(resultFilter);
