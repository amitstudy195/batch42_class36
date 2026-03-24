const express = require('express');

// create the app
const app = express();

// serve the static folder and files
app.use(express.static("public"))

app.listen(5005, ()=> {
    console.log("server is running at the port number 5005");
    
})