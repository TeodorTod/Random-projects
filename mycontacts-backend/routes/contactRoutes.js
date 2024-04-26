const express = require('express');
const { getContact, createContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController');
const validateToken = require('../middleware/validateHandleToken');
const router = express.Router();

router.use(validateToken);
router.route('/').get(getContacts).post(createContact);
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;