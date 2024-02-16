const User = require("../models/User");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const user = new User({
            ...req.body,
            password: hashedPassword
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ error: "User not found" });
        if (!(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(401).json({ error: "Wrong password!" });
        }
        const token = await jwt.sign({ user }, 'fake-secret')
        res.json({ user, access_token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
