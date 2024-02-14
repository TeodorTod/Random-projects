const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.set('view engine', 'pug');

app.use(bodyParser.json())
app.use(routes);

mongoose.connect('mongodb://127.0.0.1:27017/nodejs_express')
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    }));


