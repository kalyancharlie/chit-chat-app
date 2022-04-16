const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const asyncHandler = require("express-async-handler");

const guard = async (req, res, next) => {
  try {
    let token;
  
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        res.status(401).json({status: false, statusCode: 401, message: 'Auth Failed'});
        throw new Error("Not authorized. Invalid Token");
      }
    }
  
    if (!token) {
      res.status(401).json({status:false, statusCode: 401, message: 'Not authorized. Login to view the resource.'});
    }

  } catch(error) {
    res.status(401).json({message: 'Not authorized. Login to view the resource.'});
  }
};

module.exports = { guard };