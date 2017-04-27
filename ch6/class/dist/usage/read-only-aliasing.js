let emotion = { name: "Sad" };
//emotion.name="Happy"; 와 같이 선언하여 값을 재할당 할 수 없음
function aliasing(emotion) {
    emotion.name = "Happy";
}
aliasing(emotion);
console.log(emotion.name); // "Happy""
