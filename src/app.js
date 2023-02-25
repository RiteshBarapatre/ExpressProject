const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
app.set("view engine", "hbs")
app.set('views', path.join(__dirname,'../views'))

const partialPath = path.join(__dirname , "../partials")
hbs.registerPartials(partialPath)



//Using static files to display on Website
// console.log(__dirname)
// app.use(express.static(path.join(__dirname,"../public")))

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("/contact",(req,res)=>{
    res.send("This is Contact Page !!!")
})
app.get("*",(req,res)=>{
    res.render("404error")
})
app.listen(8001,()=>{
    console.log("Listening...")
})