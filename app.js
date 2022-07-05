const express = require('express');
const app = express();


app.use(express.static('public')); 


app.get("/", (request, response) => {
    
    response.sendFile(__dirname + '/views/home.html');
});


app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html');
});


app.get("/works", (request, response) => {
    response.sendFile(__dirname + '/views/works-page.html');
});

app.get("/views/photo-gallery", (request, response) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
});


app.listen(3000, () => console.log("express app listening in port 3000"));

