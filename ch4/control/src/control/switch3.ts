var c3 = "hi";
// 타입이 동적으로 결정됨

switch (c3) {
    case "hi":
        console.log("hi");
        break;
    // 타입 제약이 발생해 결정된 타입과 다른 타입의 값을 case문에 사용할 수 없음
}