const express = require("express");
const router = express.Router();
const {
  authenticateAdmin,
  authenticateUser
} = require("../controllers/auth.controller");

// Admin SignIn
router.post("/signin/admin", authenticateAdmin);

// User SignIn
router.post("/signin/user", authenticateUser);


module.exports = router;
