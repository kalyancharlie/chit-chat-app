const log = require('../utils/logger')
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30d",
  });
}

// Authenticate Admin SignIn
const authenticateAdmin = async(req, res, next) => {
  try {
    log(req.body)
    const {emailId, password, isAdmin} = req.body;
    if (!isAdmin) {
      return res.status(401).json({status: false, statusCode: 401, message: 'Users are not allowed to login as Admin'})
    }
    const searchUser = await User.findOne({emailId, isAdmin: true})
    log(searchUser)
    if (!searchUser || !(await bcrypt.compare(password, searchUser.password))) {
      return res.status(401).json({status: false, statusCode: 401, message: 'Invalid Credentials'})
    }
    const {firstName, lastName, _id} = searchUser
    res.json({status: true, statusCode: 200, message: 'User Authentication Success', user: {firstName, lastName, emailId, _id, token: generateToken(_id), isAdmin: true}})
  } catch (error) {
    log(error)
    res.json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Update User Details
const authenticateUser = async(req, res, next) => {
  try {
    const {emailId, password, isAdmin} = req.body;
    if (isAdmin) {
      return res.status(401).json({status: false, statusCode: 401, message: 'Admins Cannot login as user'})
    }
    const searchUser = await User.findOne({emailId, isAdmin: false})
    log(searchUser)
    if (!searchUser || !(await bcrypt.compare(password, searchUser.password))) {
      return res.status(401).json({status: false, statusCode: 401, message: 'Invalid Credentials'})
    }
    const {firstName, lastName, _id} = searchUser
    res.json({status: true, statusCode: 200, message: 'User Authentication Success', user:{firstName, lastName, emailId, _id, token: generateToken(_id), isAdmin: false}})
  } catch (error) {
    log(error)
    res.json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

module.exports = {authenticateAdmin, authenticateUser}