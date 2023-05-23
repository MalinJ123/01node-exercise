import { question } from "readline-sync";


GuessANumber()

function GuessANumber() {
	console.log('Gissa det slumpade nummret')

	let random = Math.ceil(Math.random() * 100) + 1
	let guessCorrectly = false
	let numbOfGuesses = 0 

	while (!guessCorrectly) {

		let guess = Number(question('guess a number? '))
		numbOfGuesses++
		if (guess === random) {
		console.log( `Grattis du gissade rätt nummer på ${numbOfGuesses} försök` );
			guessCorrectly = true

		} else if (guess > random) {
			console.log('För högt');
		} else {
			console.log('För lågt ');
		}

	}
}




