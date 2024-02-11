const express = require('express');
const bookRouter = require('./book');
const router = express.Router();

router.use('/book', bookRouter);

router.get('/', (req, res) => {
    res.send('hello world')
});

router.all('/*', (req, res) => {
    res.send('Page does not exist!')
});


module.exports = router;
