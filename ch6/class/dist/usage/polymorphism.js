class LED {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return "LED => " + this.name;
    }
}
class OLED {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return "OLED => " + this.name;
    }
}
class MonitorTest {
    display(data) {
        if (typeof data === "string") {
            console.log("3. string => " + data);
        }
        else {
            console.log("4. number => " + data);
        }
    }
    displayName(monitor) {
        if (monitor instanceof LED) {
            let myMonitor = monitor;
            console.log("1.", myMonitor.getName());
        }
        else if (monitor instanceof OLED) {
            let myMonitor = monitor;
            console.log("2.", myMonitor.getName());
        }
    }
}
var m = new MonitorTest();
m.displayName(new LED("Happy TV"));
m.displayName(new OLED("Happy TV"));
m.display("Happy");
m.display(123);
/* 다형성을 구현하면서 클래스로 캐스팅을 수행했습니다. 캐스팅은 <클래스명> 형태로 캐스팅을 할 수 있습니다. */ 
