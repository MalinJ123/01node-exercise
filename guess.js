import { question } from "readline-sync"

console.log('hello world')
let answear = question('Vad heter du? ')

console.log('Hej och välkommen', answear)

//Räkna ut och gissa nr 
let secret = Math.floor( Math.random() * 100) + 1
let guessedCorrect = false
let numberOfGuesses = 0

while( !guessedCorrect ) {
	console.log('Guess a number between 1 and 100!')
	let guess = Number( question('Guess: ') )
	numberOfGuesses++

	if( guess === secret ) {
		console.log(`Congratulations! You guessed the secret ${secret} in ${numberOfGuesses} tries!`)
		guessedCorrect = true
	}
	else if( guess < secret ) {
		console.log('Too low!')
	}
	else {
		console.log('Too high!')
	}
}