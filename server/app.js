const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const configDB = require('./config/Database');
const notes = require('./routes/notes');
const users = require('./routes/users');
const categories = require('./routes/categories');
const contacts = require('./routes/contacts');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(configDB.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(console.log('conncection successful'))
  .catch((err) => console.log(err));

app.use('/notes', notes);
app.use('/notes/:id', notes);
app.use('/notes/populate/:id', notes);
app.use('/users', users);
app.use('/categories', categories);
app.use('/contacts', contacts);

const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log('Node server started at port: '+ port);
});