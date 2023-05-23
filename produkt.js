import { readFile, writeFile } from 'node:fs/promises'
import { question } from 'readline-sync'

const filename = 'produkt.json'

menu()

async function menu (){
	console.log(' ---------- menu -----------');
	console.log(' 1. View all products ');
	console.log(' 2. Add a new product  ');
	console.log(' 3. Search by product name ');
	console.log(' 4. Edit a product ');
	console.log(' 5. Delete a product');
	console.log(' 0.  Exit');

	let input = question('?: ')

	if (input === '1'){
		await showProduct()
	} else if (input === '2'){
		let title = question('Title: ')
		let description = question('Product Description: ')

		await addProduct(title, description)
	} else if (input === '4'){
		let findProduct = question('Title: ')
		findProduct()
	}
	
	else if (input === '0') {
		console.log('Welcome back...')
		return
	}

	menu()
}


async function showProduct() {
	let buffer = await readFile(filename)
	let contents = buffer.toString()
	console.log('Visar produkter: \n' + contents + '\n');

}

async function addProduct(title, description) {
	let buffer = await readFile(filename);
	let contents = buffer.toString();
	contents += `\n${title}: ${description}`; // Modified to append title and description with proper formatting
	await writeFile(filename, contents);
 }

 async function findProduct(){

 }