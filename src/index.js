const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

/* Database config */
mongoose.connect('mongodb+srv://rafael:<albernaz123>@cluster0.brb7r.mongodb.net/<uploadDB>?retryWrites=true&w=majority/upload', {
  useNewUrlParser: true,
  useUnifiedTopology: true 

}),

app.use(cors());
app.use(require('./Routes'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))


app.listen(3000);