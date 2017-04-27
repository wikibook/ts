var Day;
(function (Day) {
    Day[Day["mon"] = 0] = "mon";
    Day[Day["tue"] = 1] = "tue";
    Day[Day["fri"] = 4] = "fri";
    Day[Day["sat"] = 5] = "sat";
    Day[Day["other"] = 5] = "other";
})(Day || (Day = {}));
;
console.log("1번 : ", Day, typeof Day);
console.log("2번 : ", Day.mon, Day.tue, Day.fri);
console.log("3번 : ", Day['mon'], Day['tue'], Day['fri']);
let myDay = Day.sat;
console.log("4번 : ", typeof myDay, myDay);
console.log("5번 : ", Day[0], Day[1], Day[4]);
console.log("6번 : ", Day['0'], Day['1'], Day['4']);
let myDay2 = Day[0];
console.log("7번 : ", typeof myDay2, myDay2);
