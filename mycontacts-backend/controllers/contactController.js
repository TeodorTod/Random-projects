

const getContacts = (req, res) => {
    res.status(200).json({ msg: 'Get all contacts' });
};

const getContact = (req, res) => {
    res.status(200).json({msg: `Get contact ${req.params.id}`})
};

const createContact = (req, res) => {
    console.log(req.body);
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are required!');
    }
    res.status(200).json({msg: 'Create contact'});
};

const updateContact = (req, res) => {
    res.status(200).json({msg: `Update contact ${req.params.id}`});
};

const deleteContact = (req, res) => {
    res.status(200).json({msg: `Delete contact for ${req.params.id}`});
};

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };