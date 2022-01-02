const mongoose = require('./connection')
const Sneakers = require('../models/sneaker')
const sneakerSeeds = require('./seeds.json')



Sneakers.deleteMany({})
 .then(()=>{
     return Sneakers.insertMany(sneakerSeeds)
})
 .then(data => console.log(data))
.catch(err=>console.log(err))
.finally(()=>{
    process.exit()
})