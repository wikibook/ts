const p = {
    name: "happy",
    age: 30
};
const h = "hello ts!";
export { p as default, h as hello };
/*
export { p as default, h as hello }; 선언 후
export { p as default }와 같이 한번더 선언하는 것은 불가합니다.
*/ 
