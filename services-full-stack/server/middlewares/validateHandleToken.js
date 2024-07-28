const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.error('Token verification error:', err); 
        res.status(401).json({ message: "User is not authorized", error: err });
        return;
      }
      req.user_id = decoded.user.id; 
      next();
    });
  } else {
    console.error('Token missing or invalid format'); 
    res.status(401).json({ message: "User is not authorized or token is missing" });
  }
});

module.exports = validateToken;
