class PC {
    private _ram: string = "1G";
    constructor(public msg: string) {}
    set ram(value: string) { this._ram = value; }
    get ram() { return this._ram; }
    protected getMessage() {
        return this.msg;
    }
}

class Desktop extends PC {
    constructor(public name: string) { super(name); }
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