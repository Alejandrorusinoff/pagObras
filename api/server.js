const express = require('express')
const nodemailer = require("nodemailer");
const path = require('path')
const routes = require('./routes')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = 3001


app.use(cors()) 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('tiny'))

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server escuchando en el ${port}`)
})