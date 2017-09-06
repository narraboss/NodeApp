const express = require('express');
const routes = require('./routes/api');
const bodyParse= require('body-parser');
const mongoose = require('mongoose');


//setup express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/Whishlist');
mongoose.promise = global.promice;

//initialize the bodyParse
app.use(bodyParse.json());

//initialize the routes
app.use('/api', routes);

//error handling middleware
app.use(function(err,req,res,next) {
//console.log(err);
res.send({error: err.message});
})

//listen for requests
app.listen(4000,function() {
   console.log("hello from Basanth");
});
