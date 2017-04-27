var obj = {
  set name(name) {
    this.myName = name;
  },
  get name() {
    return this.myName;
  },
  myName: ""
}

obj.name="happy";
console.log(obj.name);