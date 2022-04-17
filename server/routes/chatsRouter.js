const express = require("express");
const router = express.Router();
const {
  getAllChats,
  getGroupMembers,
  createOrGetChat,
  createChatGroup,
  removeChatGroup,
  addToChatGroup,
  removeFromChatGroup,
  sendMessage,
  getChatMessages,
  toggleLike
} = require("../controllers/chats.controller");
const {guard} = require('../middlewares/authGuard')

// Chat APIS

// Get All Chats of User - UserId
router.get("/all/:userId", guard, getAllChats);

// Get Group Members - senderId&chatId
router.get("/members", getGroupMembers);

// Create Chat - ?senderId&targetUserId=targetId
router.post("/start-chat", guard, createOrGetChat);
 
// Create Group - ?senderId, return groupId Obj
router.post("/create-group", guard, createChatGroup);

// Remove Group - ?senderId&chatId=targetId
router.delete("/remove-group", guard, removeChatGroup);

// Add To Chat Group - ?senderId&groupId&targetUserId
router.post("/add-to-group", guard,  addToChatGroup);

// Remove from Chat Group - ?senderId&groupId&targetUserId
router.delete("/remove-from-group", guard, removeFromChatGroup);

// Send Message to a Chat - ?sender&chatId body:message
router.post("/messages", guard, sendMessage);

// Get Messages for a Chat - ?chatId
router.get("/messages", guard, getChatMessages);

// Send Message to a Chat - ?sender&chatId&messageId
router.post("/messages/toggle-like", guard,  toggleLike);

module.exports = router;
