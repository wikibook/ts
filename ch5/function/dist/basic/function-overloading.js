let constellation = [
    { name: "Capricorn", month: 1 }, { name: "Aquarius", month: 2 }, { name: "Pisces", month: 3 },
    { name: "Aries", month: 4 }, { name: "Taurus", month: 5 }, { name: "Gemini", month: 6 },
    { name: "Cancer", month: 7 }, { name: "Leo", month: 8 }, { name: "Virgo", month: 9 },
    { name: "Libra", month: 10 }, { name: "Scorpio", month: 11 }, { name: "Sagittarius", month: 12 }
];
function pick(x) {
    if (typeof x == "object") {
        return x.month - 1;
    }
    else if (typeof x == "number") {
        if (x > 0 && x < 13) {
            return x - 1;
        }
        else {
            return -1;
        }
    }
}
let objMonth = { month: 1 };
let numMonth = 12;
let pickConst = constellation[pick(objMonth)];
let pickConst2 = constellation[pick(numMonth)];
console.log(pickConst);
console.log(pickConst2);
