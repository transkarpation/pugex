const Router = require('express').Router

const r = Router()

r.get('/login', (req, res) => {
    res.render('auth/login')
})

r.get('/signup', (req, res) => {
    res.render('auth/signup')
})

module.exports = r