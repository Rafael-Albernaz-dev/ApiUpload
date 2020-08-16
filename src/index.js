const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(require('./Routes'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


app.listen(3000);