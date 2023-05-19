import { question } from 'readline-sync'
import { readFile, writeFile } from 'node:fs/promises'
import { loadavg } from 'node:os';

const file = 'books.json'

console.log(' ** Welcome to the library**');
console.log(' What do you want to do? \n ')

console.log(' 1. View the catalouge');
console.log(' 2. Add a book');
console.log(' 3. Remove a book');

console.log(' 0. Exit \n ');
// question returnerar alltid en sträng 
let input = question('Pick an option: ')



if (input === '1') {
	//OBs! readFile kastar ett error om filen inte finns ( try catch) JSON.parse kastar error om datan inte är i JSON-format. 
	// let fileBuffer = await readFile(file) //läser in fil 
	// let contents = fileBuffer.toString()// konverterar
	// let books = JSON.parse(contents)	
	let books = await loadBooks(file)


	let sentence = ''

	if (books.lenght === 1) { sentence = `There is 1 book in the library: ` }	else sentence = (` There are ${books.lenght} in the library: `)
	books.forEach(book => {
		console.log(`- ${book.title} by ${book.author}`)
	});
	console.log('')

} else if (input === '2') {
	let title = question('Input a title: ')
	let author = question('Input the author: ')
	let newBook = { title: title, author: author }

	let books = await loadBooks(file)
	books.push(newBook)
	saveBooks(file, books)

}

	else if (input === '3') {
		let books = await loadBooks(file);
	 
		// Display the current books
		console.log('Current books in the library:');
		books.forEach((book, index) => {
		  console.log(`${index + 1}. ${book.title} by ${book.author}`);
		});
		console.log('');
	 
		// Prompt the user to choose a book to delete
		let indexToDelete = question('Enter the number of the book you want to delete: ');
	 
		// Validate the user input
		if (indexToDelete < 1 || indexToDelete > books.length) {
		  console.log('Invalid input. No book deleted.');
		//   return;
		}
	 
		// Remove the selected book from the array
		let deletedBook = books.splice(indexToDelete - 1, 1)[0];
		console.log(`The book "${deletedBook.title}" by ${deletedBook.author} has been deleted from the library.`);
		console.log('');
	 
		// Update and save the modified book list
		saveBooks(file, books);
	 }
	 








async function loadBooks(filename) {


	try {
		let fileBuffer = await readFile(file) //läser in fil 
		let contents = fileBuffer.toString()// konverterar
		return JSON.parse(contents)
	} catch (error) {
		console.log('Error: ' + error.message);
		return []
	}

}


async function saveBooks(filename, books) {
	let json = JSON.stringify(books)
	await writeFile(filename, json)
}