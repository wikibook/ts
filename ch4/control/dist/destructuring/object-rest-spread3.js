const appStatus = {
    title: "hello",
    prod: false,
    support: ["android", "ios"]
};
const shallowCopy = Object.assign({}, appStatus);
const referenceCopy = appStatus;
console.log('1번 : ', appStatus === shallowCopy, shallowCopy);
console.log('2번 : ', appStatus === referenceCopy, referenceCopy);
appStatus.prod = false;
appStatus.support.push("window");
console.log('3번 : ', appStatus);
