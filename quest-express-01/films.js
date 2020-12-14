

const express = require('express');

const app = express();

const port = 8000;


const movies = require("./movies.js")

app.get("/movies",(req,res ) => {

    const queryMovie = req.query.maxDuration;
    
    
    if (query) { const movieItem = movies.filter((movie) =>  movie.duration >= query);
       
        res.json(movieItem)
    
    }
else {
    res.json("movies")
};

app.get("/nothing", (req,res) => {
    res.status(404).send("there is nohing here bro")
}) ;

}) 



app.listen(port, () => {
    console.log(`server is running on ${port}`);
  })