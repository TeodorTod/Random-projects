const express = require('express');
const { registerUser, loginUser, currentUser, logoutUser, updateUser } = require('../controllers/authController');
const validateToken = require('../middlewares/validateHandleToken');


const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.get('/current', validateToken, currentUser);

router.put('/update', validateToken, updateUser);

module.exports = router;