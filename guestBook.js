let visits = 0

function getGuestbook(req, res) {
	visits = visits + 1
	// visits++
	res.send('Du är besökare nummer ' + visits)
}

export { getGuestbook }