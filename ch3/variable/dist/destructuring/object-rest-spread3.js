var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const appStatus = {
    title: "hello",
    prod: false,
    support: ["android", "ios"]
};
const shallowCopy = __assign({}, appStatus);
const referenceCopy = appStatus;
console.log('1번 : ', appStatus === shallowCopy, shallowCopy);
console.log('2번 : ', appStatus === referenceCopy, referenceCopy);
appStatus.prod = false;
appStatus.support.push("window");
console.log('3번 : ', appStatus);
