const express = require('express');
const bookRouter = express.Router();

bookRouter
    .route('/')
    .get((req, res) => {
        res.send('All books')
    })
    .post((req, res) => {
        res.json({ data: "Book is stored" })
    });


bookRouter.get('/:id', (req, res) => {
    const { params: { id } } = req;
    res.send(`The searched book is with id ${id}`)
});


module.exports = bookRouter;
