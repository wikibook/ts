interface IWord {

}
interface ISentence<S, W extends IWord> {
    sentence: S[];
    words: W[];
}

class Sentence<S, W extends IWord> implements ISentence<S, W>{
    sentence: S[] = [];
    words: W[] = [];
    add(pSentence: S, pWord: W) {
        this.sentence.push(pSentence);
        this.words.push(pWord);
    }
}

var mSentence = new Sentence<string, string>();
mSentence.add("hello world1","happy1");
mSentence.add("hello world2","happy2");

console.log(mSentence.sentence.toString());
console.log(mSentence.words.toString());