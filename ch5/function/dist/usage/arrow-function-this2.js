var person2 = {
    name: "Happy",
    hello: function (name2) {
        return () => {
            let message = "Hello, " + this.name + name2;
            return { hello1: message };
        };
    }
};
console.log(person2.hello("grammer")().hello1);
