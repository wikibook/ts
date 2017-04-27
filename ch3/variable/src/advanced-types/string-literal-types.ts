type eventType = "keyup" | "mouseover";

const myEvent: eventType = "keyup";
console.log(typeof myEvent, myEvent);

function on(event: eventType, callback: (message: string) => any) {
    console.log(typeof event, event);
    callback("callback!");
}

on(myEvent, (message) => console.log(message));