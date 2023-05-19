import { readFile, writeFile } from 'node:fs/promises'
import { question } from 'readline-sync'

const filename = 'guestBook.txt'

menu()

async function menu (){

	console.log('Välkommen')
	console.log('1. Bläddra i gästboken');
	console.log('2. Lägg till ett nytt namn');
	console.log('3. Rensa gästboken');
	console.log('4. Exit');


	let chosen = question('? ')

	if( chosen === '1' ) {
		await printGuestbook()
	}
	else if( chosen === '2' ) {
		await addToGuestbook()
	}
	else if( chosen === '4' ) {
		console.log('Welcome back...')
		return
	}
	// Rekursiv funktion - menu anropar sig själv
	menu()

}






// printGuestbook()
// addToGuestbook()


//för att läsa filerna ifrån guestBook
async function printGuestbook() {
	let buffer = await readFile(filename)
	let contents = buffer.toString()
	console.log('printing guestbook: \n' , contents);
}

async function writeGuestbook(newName){
	await writeFile(filename,newName)
}
async function addToGuestbook(newName) {
	let buffer = await readFile(filename)
	let contents = buffer.toString()
	await writeFile(filename, contents + '\n' + newName)
}

// await writeGuestbook('Ann-Sophie')
// await addToGuestbook('Viktor')
// await addToGuestbook('Malin')
// await printGuestbook()





