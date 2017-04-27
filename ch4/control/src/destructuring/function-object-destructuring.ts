function play({ ready, minute = -1 } = { ready: "" }): void {
    console.log(ready, minute);
}
play({ ready: "yes" }); // minute = -1이기 때문에 부분적으로 생략 가능합니다.
play({ ready: "yes", minute : 30 });
play(); // { ready: "" }이고 {minute = -1} 이기 때문에 인자를 생략할 수 있습니다.

//인자를 전달 할 때 ready 속성은 반드시 필요합니다.
//play({});