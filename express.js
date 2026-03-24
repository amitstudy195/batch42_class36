// please create basic express server

// import the express js package

const express = require("express");

// create the app, init the application
const app = express();

//routes
app.get("/",(req, res)=>{
    res.send("Welcome to home page")
})
app.get("/about",(req, res)=>{
    res.send("Welcome to about page")
})
app.get("/contact",(req, res)=>{
    res.send("Welcome to contact page")
})
app.get("/",(req, res)=>{
    res.send("Welcome to home page")
})
app.use("/",(req, res)=>{
    res.send("page is not found")
})

//start the server
app.listen(3000, ()=>{
    console.log("server is starting at port number 3000");
    
})