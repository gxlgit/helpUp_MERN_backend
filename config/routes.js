var express = require('express')
var router = express.Router()
var passport = require('passport')
var usersController = require('../controllers/users')
var staticsController = require('../controllers/statics')
var jobsController = require('../controllers/jobs')
var profileController = require('../controllers/profile')

//borrowed from WDI-express passport lesson
function authenticatedUser(req, res, next) {
	// If the user is authenticated, then we continue the execution
	if (req.isAuthenticated()) return next()

	// Otherwise the request is always redirected to the home page
	res.redirect('/')
}

router.route('/').get(staticsController.home)

router
	.route('/signup')
	.get(usersController.getSignup)
	.post(usersController.postSignup)

router
	.route('/login')
	.get(usersController.getLogin)
	.post(usersController.postLogin)

router.route('/logout').get(usersController.getLogout)

router
	.route('/profile')
	.get(authenticatedUser, profileController.getProfile)
	.put(authenticatedUser, profileController.updateProfile)
	.delete(
		authenticatedUser,
		jobsController.removeJobsByCreator,
		profileController.deleteProfile
	)

router
	.route('/jobs')
	.get(authenticatedUser, jobsController.getJobs)
	.post(authenticatedUser, jobsController.addJob)

router
	.route('/jobs/:name')
	.get(authenticatedUser, jobsController.showJob)
	.put(authenticatedUser, jobsController.updateJob)
	.delete(authenticatedUser, jobsController.removeJob)

router
	.route('/jobs/:name/volunteer_update')
	.delete(authenticatedUser, jobsController.removeVolunteer)
	.post(authenticatedUser, jobsController.addVolunteer)

module.exports = router
