const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); 

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    if (!req.user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    next();
  } catch (error) {
    console.error('Token validation error:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = validateToken;
