const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { ObjectId } = require('mongodb');

const auth = async (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1]) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decode = await jwt.verify(token, 'fake-secret');
            const user = await User.findOne({ _id: decode.user._id })
            if (!user) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            next();
        } catch (error) {
            res.status(401).json({ error: 'Unauthorized' })
        }
    } else {
    }
};

module.exports = auth;