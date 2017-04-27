var isEnabled = true;
var text = "hello";
var isActive = 0;
function isString(str) {
    return (typeof str === "string") ? true : false;
}
if (isEnabled && isString(text)) {
    console.log("if");
}
if (isActive) {
    console.log("isActive");
}
