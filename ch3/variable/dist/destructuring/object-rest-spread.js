var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
const site = {
    siteName: "hello",
    siteUrl: "www",
    siteAdmin: "@admin"
};
const { siteName } = site, rest = __rest(site, ["siteName"]);
const { siteUrl, siteAdmin } = site;
console.log('1번 : ', siteName, rest);
console.log('2번 : ', siteUrl, siteAdmin);
