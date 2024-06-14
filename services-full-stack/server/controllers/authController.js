const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are mandatory!' });
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        return res.status(400).json({ message: 'This email is already taken!' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        console.log(user);
        return res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to register!" });
    }
};

const loginUser = async (req, res) => {
    console.log('Login attempt');
    try {
        return res.status(200).json({ message: "Successful login!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to login!" });
    }
};

const currentUser = async (req, res) => {
    try {
        return res.status(200).json({ message: "Current user details!" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to get current user!" });
    }
};

module.exports = { registerUser, loginUser, currentUser };
