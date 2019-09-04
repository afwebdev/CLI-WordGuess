class Letter {
	constructor(letter) {
		this.letter = letter;
	}
}

Letter.prototype.checkLetter = (word, letter) => {
	if (!letter && !word) {
		let hiddenWord = word
			.split("")
			.map(letter => "_")
			.join("");
		console.log(hiddenWord);
		return hiddenWord;
	} else {
	}
};

module.exports = Letter;
