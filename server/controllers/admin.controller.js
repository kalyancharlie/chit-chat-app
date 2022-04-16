const log = require('../utils/logger')
const User = require("../models/user.model");

// Register New User
const registerUser = async(req, res, next) => {
  try {
    const userData = req.body;
    const searchUser = await User.findOne({emailId: userData.emailId})
    log(searchUser)
    // Email Id Already Registered Check
    if (searchUser) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Email Id Already Registered'})
    }
    const newUser = new User({...userData})
    await newUser.save()
    res.status(201).json({status: true, statusCode: 201, message: 'User Registered'})
  } catch (error) {
    log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Update User Details
const updateUser = async(req, res, next) => {
  try {
    const userId = req.params.userId
    const userData = req.body;
    log(userId)
    log(userData)
    const searchUser = await User.findById({_id: userId})
    log(searchUser)
    // User Not Available
    if (!searchUser) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Email Id not available in the Database'})
    }
    // User Email Conflict
    if (userData.emailId !== searchUser.emailId) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Email Id change is not allowed'})
    }
    await User.findOneAndUpdate({emailId: userData.emailId}, userData)
    res.status(200).json({status: true, statusCode: 200, message: 'User Details Updated'})
  } catch (error) {
    log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Remove User
const removeUser = async(req, res, next) => {
  try {
    const userId = req.params.userId
    log(userId)
    const deletedUser = await User.findByIdAndDelete({_id: userId})
    if (!deletedUser) {
      return res.status(400).json({status: false, statusCode: 400, message: 'User is Not available in Database'})
    }
    res.status(200).json({status: true, statusCode: 200, message: 'User Removed from Database'})
  } catch (error) {
    log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Get All Users
const getAllUsers = async(req, res, next) => {
  try {
    const allUsers = await User.find({isAdmin: false}, {_id: 1, firstName: 1, lastName: 1, emailId: 1})
    if (!allUsers) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Error in getting Users List', users: []})
    }
    res.status(200).json({status: true, statusCode: 200, message: 'Users Found', users: allUsers})
  } catch (error) {
    log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', user: null, error: {...error}})
  }
}

// Get User By Id
const getUserById = async(req, res, next) => {
  try {
    const userId = req.params.userId
    const userData = await User.findById({_id: userId}, {_id: 1, firstName: 1, lastName: 1, emailId: 1, isAdmin: 1})
    if (!userData) {
      return res.status(400).json({status: false, statusCode: 400, message: 'User Not Found', user: null})
    }
    res.status(200).json({status: true, statusCode: 200, message: 'Users Found', user: userData})
  } catch (error) {
    log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', user: null, error: {...error}})
  }
}

// Get User By Id
const getQueriedUsers = async(req, res, next) => {
  try {
    const query = req.query.q
    log(query)
    const queriedUsers = await User.aggregate([{
      $match: {
        $or: [
          {firstName: {$regex: query, $options: 'i'}},
          {lastName: {$regex: query, $options: 'i'}},
          {emailId: {$regex: query, $options: 'i'}}
        ],
        $and: [
          {isAdmin: false}
        ]
      }
    }]).sort({createdAt: 1})
    if (!queriedUsers) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Users Not Found', users: []})
    }
    res.status(200).json({status: true, statusCode: 200, message: 'Users Found', users: queriedUsers})
  } catch (error) {
    log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

module.exports = {registerUser, updateUser, removeUser, getAllUsers, getUserById, getQueriedUsers}