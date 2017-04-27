class AbstractClass {
    fly() {
        this.sound();
        console.log("날아갔습니다.");
    }
}
class BlueBird extends AbstractClass {
    sound() {
        console.log("파랑새가 소리를 내며");
    }
}
var bird = new BlueBird();
bird.fly();
