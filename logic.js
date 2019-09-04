let inquirer = require("inquirer");
let wordList = require("word-list-json");
let Letter = require("./Letter");
let Word = require("./Word.js");

let word = new Word();
word.storeWord(wordList[`${Math.floor(Math.random() * 50000) + 60000}`]);

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
			console.log(answers);
			askForLetter();
		});
};

askForLetter();
