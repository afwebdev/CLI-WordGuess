let inquirer = require("inquirer");
//massive word list package, returns a JSON of words, words in 50,000-100,xxx range are best.
let wordList = require("word-list-json");
let Word = require("./Word");

// let word = new Word(wordList[`${Math.floor(Math.random() * 10000) + 50000}`]);
let word = new Word("andrew");
let arrayWord = [];

const makeWord = cbPrompt => {
	//Make Our Word Array OBJ.
	word.makeWord();
	//display the prompt for guessing letter.
	cbPrompt();
};

const newGame = () => {
	arrayWord = [];
	console.clear();
	// word = new Word(wordList[`${Math.floor(Math.random() * 10000) + 50000}`]);
	word = new Word("andrew");
	word.makeWord();
	promptForLetter();
};

const winner = () => {
	// console.clear();
	inquirer
		.prompt([
			{
				type: "list",
				name: "playAgain",
				choices: ["Yes", "No"],
				message: `Winner! Winner! The Word was: ${word.word}. Would you like to play again?`
			}
		])
		.then(answer => {
			answer.playAgain === "Yes" ? newGame() : false;
		});
};

const promptForLetter = () => {
	word.displayWord();
	//inquirer takes an ARRAY of QUESTION OBJECTS in the below format
	//https://www.npmjs.com/package/inquirer
	if (word.guessLeft === 0) {
		inquirer
			.prompt([
				{
					type: "list",
					name: "playAgain",
					choices: ["Yes", "No"],
					message: "Game Over, Play again?"
				}
			])
			.then(answer => {
				if (answer.playAgain === "Yes") {
					newGame();
				}
			});
	} else
		inquirer
			.prompt([
				{
					type: "input",
					name: "guess",
					message: "Guess a Letter"
				}
			])
			.then(answers => {
				let answer = answers.guess.toLowerCase();

				if (answer.length === 1) {
					console.clear();
					if (word.guessLetter(answer)) {
						winner();
					} else promptForLetter();
				} else if (answer.length < 1) {
					console.clear();
					console.log("Please Try Again - Guess atleast ONE letter.");
					promptForLetter();
				} else {
					console.clear();
					console.log("Please Try Again - Guess ONLY ONE letter");
					promptForLetter();
				}
				//Now re-display prompt(move me after)
			});
};

console.clear();
arrayWord = makeWord(promptForLetter);
