class Profile {
    constructor() { }
    myName(value: any): void {
        console.log("Parent :", value);
    }
}

class MyProfile extends Profile {
    constructor() { super(); }

    myName(value: number): void;
    myName(value: string): void;
    myName(value: any): void {
        if (typeof value === 'number') {
            console.log('숫자 : ', value);
        }
        else if (typeof value === 'string') {
            console.log('문자열 : ', value);
        } else {
            console.log('기타 : ', value);
        }

    }

}

var myProfile = new MyProfile();
myProfile.myName("happy");
myProfile.myName(123);


/*
myName(value: number | string): void {
        console.log(value);
    }
*/