class Sparrow {
    constructor(leg, wing) {
        this.leg = leg;
        this.wing = wing;
    }
    get numWing() {
        return this.wing;
    }
}
let mSparrow = new Sparrow(2, 2);
console.log(mSparrow.numWing);
console.log(mSparrow.leg, mSparrow.wing);
