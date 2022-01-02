const mongoose = require('../db/connection')


 const sneakerSchema= new mongoose.Schema({
     name: {type: String, required: true},
     brand: String,
     colorWay: String,
     img: String,
     size: {type: Number},
     worn: {type: Number, min: 0}

 })

 const Sneakers = mongoose.model('Sneakers', sneakerSchema)
 module.exports = Sneakers