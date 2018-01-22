/*
Mongoose schema for the user profile
*/
var mongoose = require('mongoose')

var Profile = mongoose.Schema({
//  img       : { data: Buffer, contentType: String },
  img       : String,
  address   : String,
  phone     : String,
  interests : [String],
})

module.exports = mongoose.model('Profile', Profile)
