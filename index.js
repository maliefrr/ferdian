const express = require("express") // manggil library express
const expressLayout = require("express-ejs-layouts")
const path = require("path")
const app = express()

// setup view engine
app.set("views",path.join(__dirname, "views")) // views ada di folder mana
app.set("view engine","ejs")
app.use(expressLayout)
app.use(express.static(path.join(__dirname, "public"))) // tempat frontend js sama css / gambar

const port = 3000

app.get("/",(req,res) => {
    res.render("home",{
        title: "Bacot",
        layout: "layouts/home-layout"
    })
})

app.post("/",(req,res) => {
    console.log(req.body)
    res.redirect("/")
})

app.get("/:username",(req,res) => {
    res.send(`Hello ${req.params.username}<br> test`)
})

app.listen(port)