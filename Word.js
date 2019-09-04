class Word {
	constructor() {}
}

Word.prototype.storeWord = word => {
	this.word = word;
	console.log("hey", word);
};

module.exports = Word;
