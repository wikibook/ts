declare type handler4 = (str: string, nTimes: number) => void;
var call4: handler4 = (str: string, nTimes: number) => console.log(Array(nTimes).join(str));
call4("#",10);