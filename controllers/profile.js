const User = require('../models/user')

// Read's user's profile
function getProfile(request, response) {
	User.findOne({ 'local.email': request.user.local.email })
		.then( user => {
			response.render('profile_person.hbs', {
				profile: user.local.profile
			})
		})
		.catch(err => {
			console.log(err)
		})
}

//Updates user's profile
function updateProfile(request, response) {
	User.findOneAndUpdate(
		{ 'local.email': request.user.local.email },
		{ 'local.profile': request.body.profile },
		{ new: true }
	)
		.then(user => {
			response.redirect('/profile')
		})
		.catch(err => {
			console.log(err)
		})
}

//Deletes user's profile and account
function deleteProfile(request, response) {
	User.findOneAndRemove({ 'local.email': request.user.local.email })
		.then(() => {
			response.redirect('/logout')
		})
		.catch(err => {
			console.log(err)
		})
}

module.exports = {
	getProfile: getProfile,
	updateProfile: updateProfile,
	deleteProfile: deleteProfile
}
