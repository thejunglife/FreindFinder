const express = require('express')
const { join } = require('path')
const app = express()

// middleware
app.use(express.static(join(__dirname, 'public')))
// send json from front end to back end
app.use(express.json())
// lets us use nested javascript objects
app.use(express.urlencoded({ extended: true }))

// // express-react-views VIEW ENGINE 
// app.set('views', join(__dirname, 'views'))
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

app.get('/survey', (req, res) => {
  res.send('hello')
})



app.listen(3000)