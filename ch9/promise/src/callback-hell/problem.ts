interface IMessage {
    greetings: string;
}

function getFunc1(text: string, callback) {
    //비동기 처리 후 콜백 함수 호출
    setTimeout(function () {
        callback(text, true);
    }, 1000);
};

function getFunc2(callback) {
    let isSuccess = true;
    let data: IMessage = { greetings: "hello2" };

    //비동기 처리 후 콜백 함수 호출
    setTimeout(function () {
        callback(isSuccess, data);
    }, 500);

};

function getList() {

    let text: string = "hello1";

    getFunc1(text, function (response, isSuccess: boolean) {

        //비동기 응답 결과를 받아 성공적으로 수행 됐으면 다음 진행
        if (isSuccess) {
            console.log(response);

            getFunc2(function (isSuccess, data: IMessage) {
                if (isSuccess) {

                    //비동기 응답 결과를 받아 반영
                    console.log(data.greetings);
                }
            });
        }
    });
};

getList();