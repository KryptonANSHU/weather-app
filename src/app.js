const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT  ||  3000;
 
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");
//Public static path    
app.use(express.static(staticpath));
hbs.registerPartials(partialpath);

app.set('view engine','hbs');
app.set("views",templatepath);


app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
})
app.get("*",(req,res)=>{
    res.render("404");
})

app.listen(port,()=>{
    console.log("Server is running");
})
