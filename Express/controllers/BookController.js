const { ObjectId } = require('mongodb');
const Book = require('../models/Book');


exports.index = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.store = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        console.error(error);
        res.status(500).json({Error: error.message});
    }
};

exports.show = async (req, res) => {
    const { params: { id } } = req;

    const books = await Book.findById(id);

    if (!books) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(books);
};

exports.update = async (req, res) => {
    const { params: { id } } = req;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.json(updatedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.delete = async (req, res) => {
    const { params: { id } } = req;
    
    try {
        const deletedBook = await Book.findOneAndDelete({ _id: id });
        if (!deletedBook) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



