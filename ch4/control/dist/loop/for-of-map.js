let itMap = new Map([["one", 1], ["one", 1], ["two", 2]]);
for (let entry of itMap) {
    console.log(entry);
}
console.log(itMap.get("one"));
