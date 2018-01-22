var express = require('express')
var router = express.Router()
// var passport = require('passport')
// var usersController = require('../controllers/users')
// var staticsController = require('../controllers/statics')
var jobsController = require('../controllers/jobs')
//var profileController = require('../controllers/profile')

//borrowed from WDI-express passport lesson
// function authenticatedUser(req, res, next) {
// 	// If the user is authenticated, then we continue the execution
// 	if (req.isAuthenticated()) return next()
//
// 	// Otherwise the request is always redirected to the home page
// 	res.redirect('/')
// }

// router.route('/').get(staticsController.home)

// router
// 	.route('/signup')
// 	.get(usersController.getSignup)
// 	.post(usersController.postSignup)
//
// router
// 	.route('/login')
// 	.get(usersController.getLogin)
// 	.post(usersController.postLogin)
//
// router.route('/logout').get(usersController.getLogout)

// router
// 	.route('/profile')
// 	.get(profileController.getProfile)
// 	.put( profileController.updateProfile)
// 	.delete(
//
// 		jobsController.removeJobsByCreator,
// 		profileController.deleteProfile
// 	)

router
	.route('/jobs')
	.get( jobsController.getJobs)
	.post(jobsController.addJob)

router
	.route('/jobs/:name')
	.get( jobsController.showJob)
	.put( jobsController.updateJob)
	.delete( jobsController.removeJob)



module.exports = router
