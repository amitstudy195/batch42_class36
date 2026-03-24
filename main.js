// import HTTP MODULE..create the node js app

const http = require("http");

//create the server
const server = http.createServer((req, res)=> {
    
    //check the URL
    if(req.url === "/"){
        res.write("Welcome to home page")
    } else if(req.url === "")
})