var mongoose = require('mongoose')
var bcrypt   = require('bcrypt-nodejs')


var User = mongoose.Schema({
  local : {
    name         : String,
    handle       : String,
    email        : String,
    password     : String,
    profile      : {
                    img       : String,
                    address   : String,
                    phone     : String,
                    //FIX THIS in the future would like every interest stored as a separate
                    //item in the array
                    interests : [String],
    }
  }
})

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
  }

User.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.local.password)
    }

module.exports = mongoose.model('User', User)
