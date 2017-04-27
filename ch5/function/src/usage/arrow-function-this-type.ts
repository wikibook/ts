interface HelloMessage{
    hello1: string;
}
interface Hello{
    name: string;
    hello(this: Hello): () => HelloMessage;
}
var person3 : Hello = {  
  name: "Happy",
  hello: function(this: Hello) {
      
      return () => {
          let message = "Hello, "+this.name;
          return {hello1: message};
      }
  }
}

console.log( person3.hello()() );
console.log( person3.hello()().hello1 );
