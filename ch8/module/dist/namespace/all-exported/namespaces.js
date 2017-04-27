export var A;
(function (A) {
    function aa() { }
    A.aa = aa;
})(A || (A = {}));
(function (A) {
    var B;
    (function (B) {
        function bb() { }
        B.bb = bb;
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
(function (A) {
    var B;
    (function (B) {
        var C;
        (function (C) {
            function cc() { }
            C.cc = cc;
        })(C = B.C || (B.C = {}));
    })(B = A.B || (A.B = {}));
})(A || (A = {}));
var ABCD;
(function (ABCD) {
    function cc() { }
    ABCD.cc = cc;
})(ABCD || (ABCD = {}));
