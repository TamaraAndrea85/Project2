const express = require('express')
const router = express.Router()
const Sneakers = require('../models/sneaker')


 // The home route 
 router.get('/', (req, res)=> {
    Sneakers.find({}, (err, sneakers) => {
        res.render('index',{sneakers})
   })
})

router.get('/new',(req,res)=> {
   res.render("new")
})

router.get('/:id/show', (req,res)=> {
   Sneakers.findById(req.params.id,(err, sneaker)=> {
       res.render("show", {sneaker})
   })
})

router.post('/', (req,res)=> {
   Sneakers.create(req.body, (err, newSneakers)=> {
       res.redirect('/sneaker')
   })
})

router.delete('/:id',(req,res)=> {
   Sneakers.findByIdAndRemove(req.params.id,(err, sneaker)=> {
       res.redirect('/sneaker')
   })
})

router.put('/:id',(req,res)=>{
   Sneakers.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, wine)=> {
       res.redirect('/sneaker')
   })
} )

router.get('/:id/edit',(req,res)=>{
   Sneakers.findById(req.params.id,(err, sneaker)=> {
       res.render('edit',{sneaker})
   })
})

router.put('/:id/show',(req,res)=>{
  Sneakers.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, sneaker)=> {
     sneaker.worn += 1
     sneaker.save()
      res.redirect('/sneaker/' + req.params.id + "/show")
  })
} )






  







module.exports = router