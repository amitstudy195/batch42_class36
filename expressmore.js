// import the express
const express = require("express");

// create the app
const app= express();

// create the simple route
app.get("/",(req, res)=>{
    res.send("Welcome to express app")
})

//send the response object
app.get("/product",(req, res)=>{
    const product = [{
        id:1,
        name:"mobile",
        price:50000
    },
    {
        id:2,
        name:"iphone",
        price:25000
    }

]
    // send the response
    res.send(product)
})

//middleware...next

const checkUser =(req, res, next) => {
    //user is enterd valid username and password
    console.log("validation");
    next()
    
}

//if username and password is correct then he will loading to dashboard

app.get("/userDashboard", checkUser, (req, res) => {
    res.send("Welcome to dashboard")
})

const auth = (req, res, next) => {
    const user = req.query.user;

    if(user === "admin"){
        next(); //allow to login
    } else {
        res.send("access is denied")
    }
}

app.get("/admin", auth, (req, res) =>{
    res.send("welcome to admin page")
})

app.listen(3000, () => {
    console.log("server is running 3000");
    
})