let Letter = require("./Letter");
var newLetter = new Letter();
class Word {
	constructor(word) {
		this.word = word;
	}

	checkLetter(letter) {
		return newLetter.checkLetter(this.word, letter);
	}
}

module.exports = Word;
