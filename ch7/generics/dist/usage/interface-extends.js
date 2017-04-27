class Sentence {
    constructor() {
        this.sentence = [];
        this.words = [];
    }
    add(pSentence, pWord) {
        this.sentence.push(pSentence);
        this.words.push(pWord);
    }
}
var mSentence = new Sentence();
mSentence.add("hello world1", "happy1");
mSentence.add("hello world2", "happy2");
console.log(mSentence.sentence.toString());
console.log(mSentence.words.toString());
