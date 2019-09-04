let Letter = require("./Letter");

class Word {
	constructor(word) {
		this.word = word;
	}
	checkLetter(letter) {
		return Letter.checkLetter(this.word, letter);
	}
}

module.exports = Word;
