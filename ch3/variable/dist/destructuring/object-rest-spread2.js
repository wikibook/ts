var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const request1 = {
    method: "GET",
    data: "hello"
};
const request2 = {
    method: "POST",
    redirect: "www"
};
console.log('1번 : ', { request1, request2 });
console.log('2번 : ', [request1, request2]);
function jsonConcat(o1, o2) {
    for (var key in o2) {
        o1[key] = o2[key];
    }
    return o1;
}
console.log('3번 : ', jsonConcat(request1, request2));
const options = __assign({}, request1, request2);
console.log('4번 : ', options);
