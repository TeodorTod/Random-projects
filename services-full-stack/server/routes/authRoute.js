const express = require('express');
const { registerUser, loginUser, currentUser, logoutUser } = require('../controllers/authController');
// const validateToken = require('../middleware/validateHandleToken');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/current', currentUser);

module.exports = router;