const mongoose = require('../db/connection')


 const wineSchema= new mongoose.Schema({
     name: {type: String, required: true},
     description: String,
     img: String,
     price: {type: Number,  min: 0},
     qty: {type: Number, min: 0}

 })

 const Wines = mongoose.model('Wines', wineSchema)
 module.exports = Wines