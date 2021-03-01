const Router = require('express').Router
const homeRouter = require('./home.router.js')
const authRouter = require('./auth.router')

const r = Router()

r.use('/', homeRouter)
r.use('/auth', authRouter)

module.exports = r