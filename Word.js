let Letter = require("./Letter");
var newLetter = new Letter();
class Word {
	constructor(word) {
		this.word = word;
	}
	initWord() {
		let hiddenWord = this.word
			.split("")
			.map(letter => "_")
			.join("");
		console.log(hiddenWord);
		return hiddenWord;
	}
	checkLetter(letter) {
		return newLetter.checkLetter(this.word, letter);
	}
}

module.exports = Word;
