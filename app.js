const express = require('express')
const app = express()
const path = require('path')

const port = 3000

// views
const views = path.join(__dirname, 'views/')
// public
const public = path.join(__dirname, 'public/')
// hhtp routes
const httpRaiz = '/'
const httpHome = '/home'
const httpFlexBox = '/flexbox'
const httpRegister = '/register'
const httpLogin = '/login'
const httpHomeLogin = '/homelogin'

// html
const homeHtml = 'home.html'
const flexBoxHtml = 'flexbox.html'
const registerHtml = 'register.html'
const loginHtml = 'login.html'

// Define the static file path
app.use(express.static(__dirname +'/public/'));

app.get(httpRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpFlexBox, (req, res) => {
    res.sendFile(path.join(views, flexBoxHtml))
})

app.get(httpRegister, (req, res) => {
    res.sendFile(path.join(views, registerHtml))
})

app.get(httpHomeLogin, (req, res) => {
    res.sendFile(path.join(views, loginHtml))
})
app.post(httpLogin, (req, res) => {
    res.sendFile(path.join(views, loginHtml))
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})
