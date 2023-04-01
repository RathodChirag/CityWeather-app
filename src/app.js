const express = require("express");
const app = express();
const path = require("path");
const requests = require("requests");


// public static path of home page
const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

// set the view engine
const templatsPath = path.join(__dirname,"../views");
app.set('view engine', 'hbs');
app.set("views", templatsPath);


// routing
app.get("/",(req,res)=>{
    res.send("<h1>welcome to city weather</h1>");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});    

app.get("/home",(req,res)=>{
    res.render("index");
});    

app.get("/about",(req,res)=>{
    res.render("About");
});   

app.listen("8000", () =>{
   console.log("listning to 8000");
});