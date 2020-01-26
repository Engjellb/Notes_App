const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const configDB = require('./config/Database')
const notes = require('./routes/notes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('combined'))
app.use(cors())

mongoose.connect(configDB.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(console.log('conncection successful'))
  .catch((err) => console.log(err))

app.use('/notes', notes)


const port = process.env.PORT || 8081

app.listen(port, () => {
    console.log('Node server started at port: '+ port)
})