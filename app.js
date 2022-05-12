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
const httpRegister = '/register'
const httpLogin = '/login'
const httpHomeLogin = '/homelogin'
const httpFlexBox = '/flexbox'
const httpPosition = '/position'

// html
const homeHtml = 'home.html'
const registerHtml = 'register.html'
const loginHtml = 'login.html'
const flexBoxHtml = 'flexbox.html'
const positionHtml = 'position.html'

// Define the static file path
app.use(express.static(__dirname +'/public/'));

app.get(httpRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(httpRegister, (req, res) => {
    res.sendFile(path.join(views, registerHtml))
})

app.get(httpLogin, (req, res) => {
    res.sendFile(path.join(views, loginHtml))
})
app.post(httpHomeLogin, (req, res) => {
    res.sendFile(path.join(views, loginHtml))
})

app.get(httpFlexBox, (req, res) => {
    res.sendFile(path.join(views, flexBoxHtml))
})
app.get(httpPosition, (req, res) => {
    res.sendFile(path.join(views, positionHtml))
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
    console.log(__dirname)
})
