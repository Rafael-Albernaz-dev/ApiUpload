const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

/* Database config */
mongoose.connect('mongodb://localhost:27017/upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true 

}),


app.use(require('./Routes'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))


app.listen(3000);