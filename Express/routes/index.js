const express = require('express');
const bookRouter = require('./book');
const router = express.Router();
const path = require('path');

router.use('/book', bookRouter);

router.get('/', (req, res) => {
    res.render("index", { name: 'Gincho' })
});

router.all('/*', (req, res) => {
    res.send('Page does not exist!')
});


module.exports = router;
