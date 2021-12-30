const mongoose = require('./connection')
const Wines = require('../models/wine')
const wineSeeds = require('./seeds.json')



Wines.deleteMany({})
 .then(()=>{
     return Wines.insertMany(wineSeeds)
})
 .then(data => console.log(data))
.catch(err=>console.log(err))
.finally(()=>{
    process.exit()
})