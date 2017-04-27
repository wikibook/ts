const birthMonth = 9;
const profile = {
    name: "happy",
    month: birthMonth,
};
profile.name = "happy1";
profile.name = "happy2";
profile.month--;
console.log(profile.name, profile.month);
