interface ITest {
    readonly test: number;
    
}
class Test {
    readonly test: number;    
}

let literalObj: { readonly name: string };

const myValue:number=10; // 전역에는 const를 사용 할 수 있음
//readonly test: number; // 전역에는 readonly를 사용 할 수 없음