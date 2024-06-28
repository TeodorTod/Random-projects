const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  
  console.log('Auth Header:', authHeader); // Log the auth header

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    console.log('Token:', token); // Log the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.error('Token verification error:', err); // Log the error
        res.status(401).json({ message: "User is not authorized", error: err });
        return;
      }
      req.user_id = decoded.user.id; // Ensure this matches your token payload structure
      next();
    });
  } else {
    console.error('Token missing or invalid format'); // Log the error
    res.status(401).json({ message: "User is not authorized or token is missing" });
  }
});

module.exports = validateToken;
