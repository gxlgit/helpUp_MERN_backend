const Jobs = require('../models/job')

function getJobs(request, response) {
	// Router.get( '/', (request, response) => {
	//     Gif.find({})
	//        .then( (gifs) => response.json(gifs) )
	// })
	console.log('getJobs')
	Jobs.Job.find({})
		.then( (jobsData) => { response.json(jobsData)})
		// (jobsData => {
		// 	response.render('jobs.hbs', {
		// 		jobs: jobsData
		// 	})
		// })
		.catch(err => {
			console.log(err)
		})
}

function showJob(request, response) {
	// let creator = null
	// let volunteer = null
	let name = request.params.name

	Jobs.Job.findOne({ name: name }).then(job => {response.json(job)})
																	.catch(err => {
																		console.log(err)
																	})
		}
		//if the current User created the job, allow them to edit/delete
		//REACT FIX!!!!!
		// if (request.user.local.email === job.creator) {
		// 	creator = true
			//FIX IT eventually volunteers should be stored in db as a list of _ids
			//then an array of volunteers should be created by querying the users
			//this will make sure the list has the latest volunteer info
			//for now this is hard coded in at the time of job signups
// 			response.render('job-show', {
// 				job: job,
// 				creator: creator,
// 				volunteer: volunteer
// 			})
// 		} else {
// 			//else check to see if they are currently a volunteer for the job
// 			//referenced code from https://stackoverflow.com/questions/13097266/querying-nested-documents-using-mongoose-mongodb
// 			Jobs.Job.find({
// 				name: name,
// 				'volunteers.email': request.user.local.email
// 			}).then(volunteer => {
// 				response.render('job-show', {
// 					job: job,
// 					creator: creator,
// 					volunteer: volunteer
// 				})
// 			})
// 		}
// 	})
// }

function addJob(request, response) {
	console.log('add job')
	console.log(request.body.jobs)
	Jobs.Job.create(request.body.jobs).then(job => {
		response.json(job)
		// response.redirect('/jobs')
	})
	.catch(err => {
		console.log(err)
	})
}

function updateJob(request, response) {
	let name = request.params.name
	Jobs.Job.findOneAndUpdate({ name: name }, request.body.job, {
		new: true
	}).then(job => {
					response.json(job)
		// response.redirect(`/jobs/${job.name}`)
	})
}

function removeJob(request, response) {
	let name = request.params.name
	Jobs.Job.findOneAndRemove({ name: name }).then((job) => {
		response.json(job)
		// response.redirect(`/jobs`)
	})
}

function removeJobsByCreator(request, response){
	Jobs.Job.remove({ creator: request.user.local.email })
					.then( (job) => { response.json(job)})
}
//function removeJobsByCreator(request, response, next) {
// 	console.log('removejobs')
// 	Jobs.Job.remove({ creator: request.user.local.email }, err => {
// 		if (err) console.log(handleError(err))
// 		else return next()
// 	})
// }

function removeVolunteer(request, response) {
	let name = request.params.name
	Jobs.Job.findOneAndUpdate(
		{ name: name },
		{
			$pull: {
				volunteers: {
					email: request.user.local.email,
					name: request.user.local.name
				}
			}
		}
	).then(job => {
		console.log('REMOVED ITEM: ' + job)
		response.json(job)
	//	response.redirect(`/jobs/${job.name}`)
	})
}

function addVolunteer(request, response) {
	let name = request.params.name
	console.log('adding=>' + request.user.local.name)
	Jobs.Job.findOneAndUpdate(
		{ name: name },
		{
			$push: {
				volunteers: new Jobs.Volunteer({
					email: request.user.local.email,
					name: request.user.local.name,
					img: request.user.local.profile.img
				})
			}
		}
	).then(job => {
		console.log('ADDED Volunteer: ' + job)
		response.json(job)
		//response.redirect(`/jobs/${job.name}`)
	})
}

module.exports = {
	getJobs: getJobs,
	showJob: showJob,
	addJob: addJob,
	updateJob: updateJob,
	removeJob: removeJob,
	addVolunteer: addVolunteer,
	removeVolunteer: removeVolunteer,
	removeJobsByCreator: removeJobsByCreator
}
