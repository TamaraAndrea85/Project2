const express = require('express')
const router = express.Router()
const Wines = require('../models/wine')


 // The home route 
 router.get('/', (req, res)=> {
    Wines.find({}, (err, wines) => {
        res.render('index',{wines})
   })
})

router.get('/new',(req,res)=> {
   res.render("new")
})

router.get('/:id/show', (req,res)=> {
   Wines.findById(req.params.id,(err, wine)=> {
       res.render("show", {wine})
   })
})

router.post('/', (req,res)=> {
   Wines.create(req.body, (err, newWines)=> {
       res.redirect('/wine')
   })
})

router.delete('/:id',(req,res)=> {
   Wines.findByIdAndRemove(req.params.id,(err, wine)=> {
       res.redirect('/wine')
   })
})

router.put('/:id',(req,res)=>{
   Wines.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, wine)=> {
       res.redirect('/wine')
   })
} )

router.get('/:id/edit',(req,res)=>{
   Wines.findById(req.params.id,(err, wine)=> {
       res.render('edit',{wine})
   })
})

router.put('/:id/show',(req,res)=>{
  Wines.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, wine)=> {
     wine.qty -= 1
     wine.save()
      res.redirect('/wine/' + req.params.id + "/show")
  })
} )






  







module.exports = router