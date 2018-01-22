//Materialize
$('.datepicker').pickadate({
	selectMonths: true, // Creates a dropdown to control month
	selectYears: 2, // Creates a dropdown of 15 years to control year,
	today: 'Today',
	clear: 'Clear',
	close: 'Ok',
	min: 'Today',
	closeOnSelect: false // Close upon selecting a date,
})

$('.timepicker').pickatime({
	default: 'now', // Set default time: 'now', '1:30AM', '16:30'
	fromnow: 0, // set default time to * milliseconds from now (using with default = 'now')
	twelvehour: false, // Use AM/PM or 24-hour format
	donetext: 'OK', // text for done-button
	cleartext: 'Clear', // text for clear-button
	canceltext: 'Cancel', // Text for cancel-button
	autoclose: false, // automatic close timepicker
	ampmclickable: true, // make AM PM clickable
	aftershow: function() {} //Function for after opening timepicker
})

$('.button-collapse').sideNav()

$('.dropdown-button').dropdown({
	inDuration: 300,
	outDuration: 225,
	constrainWidth: true, // Does not change width of dropdown to that of the activator
	hover: true, // Activate on hover
	gutter: 0, // Spacing from edge
	belowOrigin: true, // Displays dropdown below the button
	alignment: 'right', // Displays dropdown with edge aligned to the left of button
	stopPropagation: false // Stops event propagation
})

//https://developers.google.com/maps/documentation/javascript/geocoding#GetStarted
var geocoder
var map

function initialize() {
	htmlMap = document.getElementById('job-map')
	geocoder = new google.maps.Geocoder()
	var latlng = new google.maps.LatLng(38.8935755, -77.0846155)
	var mapOptions = {
		zoom: 8,
		center: latlng
	}
	map = new google.maps.Map(htmlMap, mapOptions)
	codeAddress()
}

var marker = null
function codeAddress() {
	var address = document.getElementById('job-location').value
	console.log('in codeAddress')
	console.log('location=>' + address)
	if (!address) address = document.getElementById('job-location').innerHTML
	geocoder.geocode({ address: address }, function(results, status) {
		if (status == 'OK') {
			if (marker) {
				marker.setMap(null)
			}
			map.setCenter(results[0].geometry.location)
			marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			})
		} else {
			Materialize.toast('Location not found', 4000, 'red')
			//('Geocode was not successful for the following reason: ' + status)
		}
	})
}

//w3Schools
function validateSignup() {
	if (document.forms['signup']['name'].value === '') {
		Materialize.toast('Must give a name!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
	if (document.forms['signup']['handle'].value === '') {
		Materialize.toast('Must pick a login name!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
	if (document.forms['signup']['email'].value === '') {
		Materialize.toast('Must give an email address!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}

	if (document.forms['signup']['password'].value === '') {
		Materialize.toast('Must pick a password!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
}

function validateCreateJob() {
	if (document.forms['job']['job[name]'].value === '') {
		Materialize.toast('Must give a name!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
	if (document.forms['job']['job[description]'].value === '') {
		Materialize.toast('Must give a description!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
	if (document.forms['job']['job[location]'].value === '') {
		Materialize.toast('Must give a location!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
	if (document.forms['job']['job[time]'].value === '') {
		Materialize.toast('Must give a time!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
	if (document.forms['job']['job[date]'].value === '') {
		Materialize.toast('Must give a date!', 4000, 'red')  // 4000 is the duration of the toast
		//alert('Must give a name')
		return false
	}
}
