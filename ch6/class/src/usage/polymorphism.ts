interface Monitor {
    getName(): string;
}

class LED implements Monitor {
    constructor(private name: string) {}
    getName(): string {
        return "LED => " + this.name;
    }
}

class OLED implements Monitor {
    constructor(private name: string) {}
    getName(): string {
        return "OLED => " + this.name;
    }
}

class MonitorTest {
    display(data: string|number){
        if(typeof data ==="string"){
            console.log("3. string => "+data);
        }
        else{
            console.log("4. number => "+data);
        }
    }
    displayName(monitor: Monitor) {

        if(monitor instanceof LED){
            let myMonitor:LED = <LED>monitor;
            console.log("1.",myMonitor.getName());
        }
        else if(monitor instanceof OLED){
            let myMonitor:OLED = <OLED>monitor;
            console.log("2.",myMonitor.getName());
        }

    }
}

var m = new MonitorTest();
m.displayName(new LED("Happy TV"));
m.displayName(new OLED("Happy TV"));
m.display("Happy");
m.display(123);

/* 다형성을 구현하면서 클래스로 캐스팅을 수행했습니다. 캐스팅은 <클래스명> 형태로 캐스팅을 할 수 있습니다. */