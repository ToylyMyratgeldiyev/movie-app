const express = require("express");
const mongoose = require("mongoose")
const URL = 'mongodb://localhost:27017/moviebox'
const PORT = 3001
const app = express()
const Movie = require('./models/movie')


mongoose
    .connect(URL)
    .then(()=> console.log("Connected port Mongoose"))
    .catch((err)=> console.log(`Error: ${err}`))

app.listen(PORT,(err)=>{
    err ? console.log(err): console.log(`Connected port ${PORT}`)
})

app.get('/movies',(req,res)=>{
    Movie
        .find()
        .then((movie)=>{
            res
                .status(200)
                .json(movie)
        })
        .catch((err)=> console.log(err))
})

