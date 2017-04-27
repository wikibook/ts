interface IMessage {
    greetings: string;
}

const getInfo1 = new Promise((resolve, reject) => {
    //비동기 처리 후 콜백 함수 호출
    setTimeout(function () {
        resolve("hello1");
    }, 1000);
}).then(res => { return res });

const getInfo2 = new Promise((resolve, reject) => {
    //비동기 처리 후 콜백 함수 호출
    let isSuccess = true;
    let data: IMessage = { greetings: "hello2" };
    setTimeout(function () {
        resolve(data);
    }, 500);
});

Promise.all([
    getInfo1,
    getInfo2,
])
.then(([result1, result2]) => {
    console.log(result1);
    console.log((<IMessage>result2).greetings);
})
.catch(err => {
    console.log(err);
});