const mongoose = require('mongoose')

const userSch = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model('User', userSch)