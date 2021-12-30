const express = require ('express')
const app = express()
const expressEjsLayouts = require('express-ejs-layouts')

const methodOverride = require('method-override')

const wineController = require('./controllers/wine')
const PORT = 4000


app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

app.use(expressEjsLayouts)
app.use('/wine', wineController)

app.use(express.static('public'))

app.set('view engine', 'ejs')






app.listen(PORT, () => {
    console.log('listening on port', PORT)
  })