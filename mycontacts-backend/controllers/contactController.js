const asyncHandler = require('express-async-handler')

const getContacts = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: 'Get all contacts' });
});

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({msg: `Get contact ${req.params.id}`})
});

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are required!');
    }
    res.status(200).json({msg: 'Create contact'});
});

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({msg: `Update contact ${req.params.id}`});
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({msg: `Delete contact for ${req.params.id}`});
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };