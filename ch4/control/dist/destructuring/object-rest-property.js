var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var rectangle = { width: 20, height: 40, background: "blue", isView: false };
var { width, height, background, isView } = rectangle;
console.log(width, height, background, isView);
var { width } = rectangle, restElement = __rest(rectangle, ["width"]);
console.log(restElement);
