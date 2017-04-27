interface INames { first:string, second:string }
function INames(url: string): INames { 
    var s:INames={first:"happy",second:"grammer"};
    return s;
 }
export default INames;

// 타입과 값을 함께 노출합니다.
