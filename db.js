var mongoose = require('mongoose');
var username = process.env.MONGODB_USER
var password = process.env.MONGODB_PASSWORD
mongoose.connect('mongodb://' + username + ':' + password + '@ds027819.mongolab.com:27819/playground')
var Score = mongoose.model('employee', {
  		firstName: String,
  		lastName: String,
  		scores: Number
})
module.exports = Score 