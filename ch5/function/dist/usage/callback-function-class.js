class Work {
    doWork() {
        this.line("*", 10); // 인자 값으로 로직을 제어함
        console.log("어떠한 작업을 처리중입니다...");
        this.line("#", 20); // 인자 값으로 로직을 제어함
    }
}
var w = new Work();
w.line = (str, nTimes) => console.log(str.repeat(nTimes)); // 로직 추가
w.doWork();
