// fs -> file system module which is the inbuild module providing by the node js

// if we wanted to create, read, write, append, delete, folders...all the files system things we can do with fs module

// create the file

const fs = require("fs");

// create the file and write the content into it
fs.writeFile("venkat.txt", "venkattttttttttttttt", (err)=>{
    if(err){
        console.log("Error creating the file");
        
    }else {
        console.log("file is created successfully");
        
    }
})

//appendFile, add the content to the existing file
fs.appendFile("venkat.txt", "\nhello new line is added and more added and more and more", (err)=>{
     if(err){
        console.log("Error appending the file");
        
    }else {
        console.log("file is appended successfully");
        
    }
})

// read the file
fs.readFile("venkat.txt", "utf-8", (err, data)=>{
     if(err){
        console.log("Error reading the data");
        
    }else {
        console.log("file content is", data);
        
    }
})

fs.mkdir("anyfolder", (err)=> {
     if(err){
        console.log("Error creating the folder");
        
    }else {
        console.log("folder is created successfully");
        
    }
})

fs.unlink("", (err)=>{
     if(err){
        console.log("Error");
        
    }else {
        console.log("deleted successfully");
        
    }
})