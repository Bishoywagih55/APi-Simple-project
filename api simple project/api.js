const express = require("express");
//const {valdation } =require("express-valdation")
const app= express();
app.use(express.json());

const mongoose = require('mongoose');
const url = "mongodb+srv://bishoywagih7:nodejs_123@cluster0.b4espat.mongodb.net/codeZone?retryWrites=true&w=majority"
mongoose.connect(url).then(() => {
    console.log("mongoose server connect");
})





const coursesRouter = require('./routes/courses.route.js')
app.use('/' , coursesRouter)



app.listen(1005 , () => {
    console.log("i listing port 1005");
});

// create array of number
