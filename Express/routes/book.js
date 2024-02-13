const express = require('express');
const bookRouter = express.Router();
const connect = require('../database/db');
const { ObjectId } = require('mongodb');

bookRouter
    .route('/')
    .get(async (req, res) => {
        const db = await connect();
        const books = await db.collection("book").find().toArray();
        res.json(books);
    })
    .post(async (req, res) => {
        const db = await connect();

        await db.collection("book").insertOne(req.body);
        res.status(201).json({ data: "Book is stored" })
    });

bookRouter
    .route("/:id")
    .get(async (req, res) => {
        const { params: { id } } = req;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ObjectId' });
        }
        const db = await connect();
        const book = await db.collection('book').findOne({ _id: new ObjectId(id) });

        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }

        res.json(book);
    })
    .patch(async (req, res) => {
        const { params: { id } } = req;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ObjectId' });
        }
        const db = await connect();
        await db.collection('book').updateOne({ _id: new ObjectId(id) }, { $set: req.body });
        res.send(`The searched book is with id ${id} to update`)
    })
    .delete(async (req, res) => {
        const { params: { id } } = req;
        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid ObjectId' });
        }
        const db = await connect();
        await db.collection('book').deleteOne({ _id: new ObjectId(id) }, { $set: req.body });
        res.status(204).send()
    });


module.exports = bookRouter;
