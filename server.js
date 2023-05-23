import { getGuestbook } from './guestbook.js'
import express from 'express'
// import { getFruits, getOne } from './fruits.js'
import fruitsRouter from './fruits.js'

//konfigurera webbserver.Express() är en funktion 
const app = express() 
const PORT = 5555

//LÄgg till middleWare
//express.json kan tolka det som skickas i body i insomnia som json format
app.use( express.json() )

app.get('/', (req, res) => {
res.send('hello from server')

})

app.get('/hedgehog', (req, res) => {
	res.send('hedgehogs are the best')
})

app.get('/grilla/:korv', (req, res) =>{
	let amount = req.params.korv
	console.log('GET/ grilla/:korv, params=', req.params);
	res.send(`Vi skall grilla ${amount} korvar!`)
} )

app.get('/grilla', (req, res) =>{
	res.send('Hur många korvar vill du grilla?')
})
// För att spara antalet besök permanent, behöver man en databas
app.get('/guestbook', getGuestbook)



// app.get('/fruits', getFruits)
// app.get('/fruits/:index', getOne )

app.use('/fruits', fruitsRouter)




// let visits = 0 
// app.get( '/guest', (req, res) =>{

// 	visits = visits + 1
// 	res.send('du är besökare nummer ' + visits)

// } )

// Starta servern med listen()
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}...`)
})

