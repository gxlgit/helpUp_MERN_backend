/*
Connection file
Mostly borrowed from WDI Express Passport lesson
*/
const express        = require('express')
const app       	   = express()
const mongoose  	   = require('mongoose')
const passport  	   = require('passport')
const flash      	   = require('connect-flash')
const hbs          	 = require("hbs")
const morgan       	 = require('morgan')
const cookieParser 	 = require('cookie-parser')
const bodyParser   	 = require('body-parser')
const session      	 = require('express-session')
const methodOverride = require('method-override')
const cors           = require('cors')
const PORT        	 = 6060


if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/helpup',{useMongoClient: true})
}
mongoose.Promise = Promise

app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cors())

app.set('view engine', 'hbs')
app.set("views","./views")
app.use(express.static(__dirname + '/public'))

app.use(session({ secret: 'WDI-PROJECT2-HELPUP' }))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

require('./config/passport')(passport)
app.use(function (request, response, next) {
  response.locals.currentUser = request.user
  next()
})


var routes = require('./config/routes')
app.use(routes)


app.set('port', process.env.PORT || PORT)

app.listen(app.get('port'), () => {
  console.log('Listening on PORT: ' + PORT)
})
