const express = require('express');
const router = express.Router();
const whishlist = require('../models/whishlist');

//get all ninjas from the db
router.get('/wishlist', function(req,res,next) {
 whishlist.find({}).then(function(whishlist){
          res.send(whishlist);
      });
})

//post

router.post('/wishlist', function(req,res,next) {
whishlist.create(req.body).then(function(whishlist){
  res.send(whishlist);
} ).catch(next);
});

//put

router.put('/wishlist/:id', function(req,res,next) {
  whishlist.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
          whishlist.findOne({_id: req.params.id}).then(function(whishlist){
              res.send(whishlist);
          });
      }).catch(next);
  });

//delete

router.delete('/wishlist/:id', function(req,res,next) {
  whishlist.findByIdAndRemove({_id: req.params.id}).then(function(whishlist){
          res.send(whishlist);
      }).catch(next);
  });


module.exports = router;
