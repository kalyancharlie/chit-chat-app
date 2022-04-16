const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
  removeUser,
  getAllUsers,
  getUserById,
  getQueriedUsers,
} = require("../controllers/admin.controller");
const {guard} = require('../middlewares/authGuard')

// ADMIN APIS

// Register User Account
router.post("/register", guard, registerUser);

// Update User Account
router.patch("/update/:userId", guard, updateUser);

// Remove User Account
router.delete("/remove/:userId", guard, removeUser);

// Get All User Accounts
router.get("/all", guard, getAllUsers);

// Get Single User Account
router.get("/user/:userId", guard, getUserById);

// Search Users
router.get("/search", guard, getQueriedUsers);

module.exports = router;
