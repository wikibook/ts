let [firstItems, ...restItems] = [10, 20, 30];
console.log("1번 : ",firstItems);
console.log("2번 : ",restItems);
console.log("3번 : ",restItems[0]);

let restItems2 = [...restItems, 3, 4];
console.log("4번 : ",restItems2);

let args = [1, 2, 3];
function printArgs(y, ...x){
    console.log("5번 : ",y, x);
}
printArgs(4, ...args);
