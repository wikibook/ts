interface Profile {
    name: string;
    gender: string;
    age: number;        
}

let testT0:Profile={name:"test",gender:"man",age:20};

type PROFILE1 = keyof Profile;
type PROFILE2 = keyof Profile[];
type PROFILE3 = keyof { [x: string]: Profile };
type PROFILE4 = keyof Profile["name"];

let testT1:PROFILE1 = "name";
let testT2:PROFILE1 = true?"name":"gender";
//let testT3:PROFILE1 = true?"name2":"gender";
//let testT4:PROFILE1 = "name2";
//let testT5:PROFILE1 = 'na'+'me';

let testT6:PROFILE2 = "length";
let testT7:PROFILE2 = "push";

let testT8:PROFILE3 = "hello";
let testT9:PROFILE4 = "length";

console.log(`
1번 : ${testT1}
2번 : ${testT2}
3번 : 에러
4번 : 에러
5번 : 에러
6번 : ${testT6}
7번 : ${testT7}
8번 : ${testT8}
9번 : ${testT9}`);