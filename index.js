const express = require('express')
const session = require('express-session')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const mongoose = require('./db/connect.js')
const routes = require('./router/index')
const app = express()


const User = require('./db/models/user.model')

// app.locals.cache = false
const MongoStore = require('connect-mongo').default
app.use(morgan('tiny'))
app.use(session({
    secret: 'keyboard',
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: false,
        maxAge: null
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/sessionauth'
    })
}))

app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

app.listen(3000, () => {
    console.log('listening')
})