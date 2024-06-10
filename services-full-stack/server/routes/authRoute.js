const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controllers/authController');
// const validateToken = require('../middleware/validateHandleToken');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/current', currentUser);

module.exports = router;