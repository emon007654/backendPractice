const express = require('express')
const port = process.env.PORT || 5000
const app = express()
const router = require('../routers/mainRouter')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// console.log(path)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../templates'))
app.use(express.static(path.join(__dirname, '../public')))

app.use(router)
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
