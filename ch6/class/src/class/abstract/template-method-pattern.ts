abstract class AbstractClass {
    abstract sound();

    public fly(): void {
        this.sound();
        console.log("날아갔습니다.");
    }

}

class BlueBird extends AbstractClass {
    public sound(): void {
        console.log("파랑새가 소리를 내며");
    }
}

var bird = new BlueBird();
bird.fly();