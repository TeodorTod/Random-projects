const express = require('express');
const bookRouter = express.Router();
const connect = require('../database/db');

bookRouter
    .route('/')
    .get(async (req, res) => {
        const db = await connect();
        const books = await db.collection("book").find().toArray();
        res.json(books);
    })
    .post(async (req, res) => {
        const db = await connect();
        const data = {
            title: 'The man of searching for a meaning',
            author: 'Viktor Frankl'
        }
        await db.collection("book").insertOne(data);
        res.json({ data: "Book is stored" })
    });

bookRouter
    .route("/:id")
    .get((req, res) => {
        const { params: { id } } = req;
        res.send(`The searched book is with id ${id}`)
    })
    .patch((req, res) => {
        const { params: { id } } = req;
        res.send(`The searched book is with id ${id} to update`)
    })
    .delete((req, res) => {
        const { params: { id } } = req;
        res.send(`The searched book is with id ${id} to delete`)
    });


module.exports = bookRouter;
