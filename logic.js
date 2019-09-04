let inquirer = require("inquirer");
//massive word list package, returns a JSON of words, words in 50,000-100,xxx range are best.
let wordList = require("word-list-json");
let Letter = require("./Letter");
let Word = require("./Word");

let word = new Word(wordList[`${Math.floor(Math.random() * 50000) + 50000}`]);
console.log(word.word); //testing init of new word object

const askForLetter = () => {
	inquirer
		.prompt([
			{
				type: "input",
				name: "guess",
				message: "Guess a Letter"
			}
		])
		.then(answers => {
			word.initWord();
			word.checkLetter(answers.guess);
			//display prompt.
			askForLetter();
		});
};

askForLetter();
