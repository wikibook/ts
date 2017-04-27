var person3 = {
    name: "Happy",
    hello: function () {
        return () => {
            let message = "Hello, " + this.name;
            return { hello1: message };
        };
    }
};
console.log(person3.hello()());
console.log(person3.hello()().hello1);
