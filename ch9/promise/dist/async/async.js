function delay(msg) {
    var ms = Math.floor(Math.random() * 1000) + 1;
    setTimeout(function () {
        console.log(msg);
    }, ms);
}
function async() {
    delay("hello1");
    delay("hello2");
    delay("hello3");
}
async();
