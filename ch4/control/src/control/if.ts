var isEnabled: boolean = true;
var text: string = "hello";
var isActive = 0;

function isString(str: string): boolean {
    return (typeof str === "string") ? true : false;
}

// 첫번째 if 문
if (isEnabled && isString(text)) {
    console.log("if");
}

// 두번째 if 문
if (isActive) {
    console.log("isActive");
}