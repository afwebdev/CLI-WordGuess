/* - **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

  - An array of `new` Letter objects representing the letters of the underlying word

  - A function that returns a string representing the word. 
  This should call the function on each letter object (the first function defined in `Letter.js`) 
  that displays the character or an underscore and concatenate those together.

  - A function that takes a character as an argument and calls the guess function on each letter object 
  (the second function defined in `Letter.js`) */

let Letter = require("./Letter");
let wordArray = [];
let guesses = [];

const Word = function(word) {
	this.word = word;
	this.guessLeft = this.word.length + 5;

	this.makeWord = () => {
		//clean old arrays,
		wordArray = [];
		guesses = [];
		word.split("").forEach(letter => {
			wordArray.push(new Letter(letter));
		});
	};

	this.displayWord = () => {
		let word = wordArray.map(letter => {
			return letter.returnLetter();
		});
		console.log("\n" + word.join(" ") + "\n");
	};

	this.guessLetter = letter => {
		if (guesses.includes(letter)) {
			console.log("Already Guessed That!");
			return;
		} else {
			guesses.push(letter);
			wordArray.forEach(letterInWord => {
				letterInWord.checkLetter(letter);
			});
			this.guessLeft--;
			console.log("Guesses Left: " + this.guessLeft);
			if (wordArray.every(word => word.guessed)) {
				return true;
			}
		}
		return false;
	};

	//end
};

module.exports = Word;
