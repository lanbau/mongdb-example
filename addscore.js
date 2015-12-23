var express = require('express')
var app = express()
const port = process.env.PORT || 8080
app.listen(port)
console.log(`Ready on port ${ port }`)
var Score = require('./db.js')

var addscore = new Score({
	firstName: "nigga",
	lastName: "tan",
	scores: -1
})
addscore.save(function (err){
	if (err) console.log('meow')
})