const express = require('express')
const app = express()
const path = require('path')

const port = 3000

// views
const views = path.join(__dirname, 'views/')
// public
const public = path.join(__dirname, 'public/')
// hhtp routes
const hhtpRaiz = '/'
const htpptHome = '/home'
const htpptFlexBox = '/flexbox'
// html
const homeHtml = 'home.html'
const flexBoxHtml = 'flexbox.html'

// Define the static file path
app.use(express.static(__dirname +'/public/'));

app.get(hhtpRaiz, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(htpptHome, (req, res) => {
    res.sendFile(path.join(views, homeHtml))
})

app.get(htpptFlexBox, (req, res) => {
    res.sendFile(path.join(views, flexBoxHtml))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})
