class PC {
    constructor(msg) {
        this.msg = msg;
        this._ram = "1G";
    }
    set ram(value) { this._ram = value; }
    get ram() { return this._ram; }
    getMessage() {
        return this.msg;
    }
}
class Desktop extends PC {
    constructor(name) {
        super(name);
        this.name = name;
    }
    info() {
        console.log(super.getMessage());
        console.log(this.getMessage());
        console.log(this.name);
        console.log(this.ram);
        this.ram = "2G";
        console.log(this.ram);
    }
}
var myPC = new Desktop("Hello Happy!");
myPC.info();
