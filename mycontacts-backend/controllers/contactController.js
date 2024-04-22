const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404).json({ message: "Contact not found" });
    } else {
        res.status(200).json(contact);
    }
});

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are required!');
    }

    try {
        const newContact = new Contact({
            name,
            email,
            phone
        });
        const savedContact = await newContact.save();
        res.status(201).json({ msg: 'Contact created successfully', contact: savedContact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Update contact ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ msg: `Delete contact for ${req.params.id}` });
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };