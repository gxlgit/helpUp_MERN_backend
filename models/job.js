/*
Mongoose schema for the Volunteer Jobs
*/
var mongoose = require('mongoose')

var Volunteer = mongoose.Schema({
	name: String,
	email: String,
	img: String
})

var Job = mongoose.Schema({
	creator: String,
	name: String,
	date: String,
	location: String,
	description: String,
	time: String,
	img: String,
	volunteers: [Volunteer]
})

module.exports = {
	Job: mongoose.model('Job', Job),
	Volunteer: mongoose.model('Volunteer', Volunteer)
}
