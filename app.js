const express = require('express')
const routes = require('./routes')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(session({
  secret: 'rahasia dong',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    sameSite: true
  }
}))

app.use(routes)


app.listen(port)