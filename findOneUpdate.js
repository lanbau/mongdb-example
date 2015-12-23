var express = require('express')
var app = express()
const port = process.env.PORT || 8080
app.listen(port)
console.log(`Ready on port ${ port }`)
var Score = require('./db.js')

//you must change the name after running once.
var query = {'firstName':'nigga'}
var update = {'firstName':'suckit'}
var options = {new: true}
Score.findOneAndUpdate(query, update, options, function(err, char){
	if (err) console.log('error')
})
