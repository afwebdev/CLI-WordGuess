let inquirer = require("inquirer");
//massive word list package, returns a JSON of words, words in 50,000-100,xxx range are best.
let wordList = require("word-list-json");
let Letter = require("./Letter");
let Word = require("./Word");

let word = new Word(wordList[`${Math.floor(Math.random() * 50000) + 50000}`]);
console.log(word.word); //testing init of new word object

const promptForLetter = () => {
	//inquirer takes an ARRAY of QUESTION OBJECTS in the below format
	//https://www.npmjs.com/package/inquirer
	inquirer
		.prompt([
			{
				type: "input",
				name: "guess",
				message: "Guess a Letter"
			}
		])
		.then(answers => {
			//Send work out to a function, somewhere, instead.
			let answer = answers.guess;
			//if answer is true(counting blanks)
			if (answer.length === 1) {
				console.log("Character entered: 1");
			} else if (answer.length < 1) {
				console.log("Please Try Again - Guess atleast ONE letter.");
			} else {
				console.log("Please Try Again - Guess ONLY ONE letter");
			}
			//Now re-display prompt(move me after)
			promptForLetter();
		});
};

promptForLetter();
