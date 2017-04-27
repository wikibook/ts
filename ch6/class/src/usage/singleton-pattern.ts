class Singleton {
    private static instance: Singleton;

    private constructor(){}

    length(str: string) {
        return str.length;
    }

    static get Instance() {
        if (this.instance === null || this.instance === undefined) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}

console.log(Singleton.Instance.length("hell"));

//var obj=new Singleton();와 갈은 객체 생성은 할 수 없습니다.
//Singleton.length("hello");와 같이 호출 할 수 없습니다.