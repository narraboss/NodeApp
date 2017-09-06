const mongoose = require('mongoose');

const schema = mongoose.Schema;

//create wishlist schema

const wishlistSchema = new schema(
{
product:{
  type:String,
},
description:{
  type:String
},
price:{
  type:String
},
inStock:{
  type:Boolean
}})

const wishlist = mongoose.model('wishlist',wishlistSchema);
module.exports=wishlist;
