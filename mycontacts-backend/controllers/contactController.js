const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
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
            phone,
            user_id: req.user.id
        });
        const savedContact = await newContact.save();
        res.status(201).json({ msg: 'Contact created successfully', contact: savedContact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
  
    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User don't have permission to update other user contacts");
    }
  
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  
    res.status(200).json(updatedContact);
  });

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User don't have permission to delete other user contacts");
      }

    await contact.deleteOne();
    res.status(200).json({ message: 'Contact successfully deleted' });
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };