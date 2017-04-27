interface UserInterface {
  name: string;
  country: string;
}

let myInfo = {name:"wook", country:"korea", alias:"happy"};

let objUser:UserInterface=<UserInterface>myInfo;
console.log("1. 인터페이스와 구조가 불일치 : "+JSON.stringify(objUser));

function getSecureObject(user: UserInterface): UserInterface {    
  return {
    name: user.name,
    country: user.country
  };
}

let objUser2 =getSecureObject(myInfo);
console.log("2. 인터페이스와 구조가 일치 : "+JSON.stringify(objUser2));