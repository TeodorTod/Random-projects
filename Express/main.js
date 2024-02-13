const express = require('express');
const app = express();
const PORT = 3000;
const routes = require('./routes/index');
const bodyParser = require('body-parser')

app.set('view engine', 'pug');

app.use(bodyParser.json())
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
})