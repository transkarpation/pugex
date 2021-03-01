const Router = require('express').Router

const r = Router()

r.get('/', (req, res) => {
    res.render('home')
})

module.exports = r