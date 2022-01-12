require('dotenv').config()
const express = require ('express')
const app = express()
const expressEjsLayouts = require('express-ejs-layouts')
const path = require('path')
const { PORT, SESSION_SECRET } = process.env
const session  = require('express-session')
const sessionsController = require('./controllers/sessions')



const methodOverride = require('method-override')
const sneakerController = require('./controllers/sneaker')



app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))



app.use(expressEjsLayouts)
app.use('/sneaker', sneakerController)

app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
})
)

app.use((req, res, next) => {
  res.locals.username = req.session.username
  res.locals.loggedIn = req.session.loggedIn
  next()
  
})

app.use((req, res, next) => {
  res.locals.message = req.session.message
  req.session.message = ""
  next()
})

const authRequired = (req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
      res.redirect('/session/login')
  }
}

app.use('/sneaker', authRequired, sneakerController)

app.use('/sessions',sessionsController)

app.get('/setCookie/:data', (req, res) => {
  req.session.data = req.params.data
  res.send('session data set')
})

app.get('/getSessionInfo', (req, res) => {
  res.send(req.session.data)
})






app.listen(PORT, () => {
    console.log('listening on port', PORT)
  })