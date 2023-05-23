import express from 'express'
const router = express.Router()

let fruits = ['strawberry', 'pear', 'apple', 'banana', 'orange']

//<man skriver inte med "/fruits" eftersom det står i server.js

router.get('/', (req, res) => {
	res.send(fruits)

})


//GÖR OM TILL ROUTER

router.get('/:index', (req, res) => {
	let maybeIndex = req.params.index

	let index = Number(maybeIndex)

	if (isNaN(index)) {
		//om index parametern är felaktig. 
		res.sendStatus(400)
		console.log(' GET /fruits/:index, felaktigt värde på index-parametern')

	} else if (index > fruits.length - 1) {
		let random = Math.floor(Math.random() * fruits.length)
		res.send(fruits[random])
	}
	else if (index < 0) {
		console.log('GET/Fruits/:index, index utanför arryen');
		req.sendStatus(400)
	}
	else {
		let fruit = fruits[index]
		res.send(fruit)
	}
})



// function getOne(req, res){
// 	let maybeIndex = req.params.index
// 	let index = Number(maybeIndex)

// 	if (isNaN(index)){
// 		//om index parametern är felaktig. 
// 		res.sendStatus(400)
// 		console.log(' GET /fruits/:index, felaktigt värde på index-parametern')

// 	}else if(index > fruits.length - 1) {
// 			let random = Math.floor(Math.random() * fruits.length)
// 			res.send(fruits[random])
// 	}
// 	else if (index < 0 ){
// 		console.log('GET/Fruits/:index, index utanför arryen');
// 		req.sendStatus(400)
// 	}
// 	else {
// 		let fruit = fruits[index]
// 		res.send(fruit)
// 	}
// }

// export { getFruits, getOne }


router.post('/', (req, res) => {
	console.log('POST /Fruits, body är: ', req.body)//body = undefined
	let maybeFruit = req.body?.name

	if(maybeFruit !== ''){
		fruits.push(maybeFruit)
		res.sendStatus(200)
	}else {
	res.sendStatus(400)
}
})

export default router 