const Chat = require('../models/chat.model');
const Message = require('../models/message.model');
const User = require('../models/user.model')

// Get All Chats of User
const getAllChats = async (req, res) => {
  try {
    const userId = req.params.userId
    // console.log(userId)
    Chat.find({ users: { $elemMatch: { $eq: userId } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "firstName lastName emailId",
        });
        res.status(200).send({status: true, statusCode: 200, chatsData: results, message: 'Chats Retrieved Successfully'});
      });
  } catch (error) {
    console.log('ERROR - GET ALL CHATS')
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error})
  }
};

// Get Group Members
const getGroupMembers = async (req, res) => {
  try {
    const {senderId, chatId} = req.query
    // console.log(chatId)
    const groupMembers = await Chat.findById({ _id: chatId }, {users: 1}).populate('users', '-password')
    // console.log(groupMembers)
    res.status(200).send({status: true, statusCode: 200, groupMembersData: groupMembers, message: 'Group Members Retrieved Successfully'});
  } catch (error) {
    console.log('ERROR - GET Members list ')
    console.log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error})
  }
};

// Create One on One Chat or Get Chat for Created Chat
const createOrGetChat = async (req, res) => {
  try {
    const {senderId, targetUserId} = req.query
    // console.log(senderId, targetUserId)
    
    if (!senderId || !targetUserId) {
      return res.status(400).json({status: false, message: 'Bad Request. Missing UserID'});
    }
  
    // Checking If chat already Exists 
    var isChatAvailable = await Chat.findOne({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: senderId} } },
        { users: { $elemMatch: { $eq: targetUserId } } },
      ],
    })
      .populate("users", "-password")
      .populate("latestMessage");
  
    isChatAvailable = await User.populate(isChatAvailable, {
      path: "latestMessage.sender",
      select: "updatedAt",
    });

    // console.log('chat availbel ', isChatAvailable)
  
    // Chat already Available
    if (isChatAvailable) {
      return res.status(200).json({status: true, statusCode: 200, chatData: isChatAvailable[0], message: 'Chat Already Exists!'})
    }
    // Chat doesn't exist
    const newChatData = new Chat({
      chatName: "SingleChat",
      isGroupChat: false,
      users: [senderId, targetUserId],
    });

    const createdChat = await newChatData.save();
    const fullChat = await Chat.findOne({ _id: createdChat._id }).populate(
      "users",
      "-password"
    );
    res.status(200).json({status: true, statusCode: 200, chatData: fullChat, message: 'Chat Created Successfully'})
  } catch (error) {
    console.log('ERROR - Create or Get Single Chat Error')
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error})
  }

};

// Create New Group
const createChatGroup = async (req, res, next) => {
  try {
    const senderId = req.query.senderId
    const {groupName} = req.body
    // console.log(senderId, groupName)
    const requestedGroup = new Chat({
      chatName: groupName,
      isGroupChat: true,
      groupAdmin: senderId,
      users: [senderId]
    })
    const createdGroup = await requestedGroup.save()
    const groupData = await Chat.findById({_id: requestedGroup._id}).populate('users', '-password').populate('groupAdmin', '-password')
    res.status(201).json({status: true, statusCode: 201, message: 'Chat Group Created Successfully', groupData})
  } catch (error) {
    console.log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Remove Chat Group
const removeChatGroup = async (req, res, next) => {
  try {
    const {senderId, chatId} = req.query
    // console.log(senderId, chatId)
    const targetGroup = await Chat.findOne({_id: chatId}).populate("groupAdmin", "-password")
    if (!targetGroup) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Group Does not Exist!' })
    }
    if (targetGroup.groupAdmin?._id.toString() !== senderId) {
      return res.status(403).json({status: false, statusCode: 403, message: 'Only Group Admins can Remove!', chatData: targetGroup })
    }
    await targetGroup.remove()
    res.status(201).json({status: true, statusCode: 201, message: 'Chat Group Deleted Successfully'})
  } catch (error) {
    console.log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Add User to Group Chaat
const addToChatGroup = async (req, res) => {
  try {
    const  {senderId, groupId, targetUserId} = req.query
    // console.log(senderId, groupId, targetUserId)
    const privilegeCheck = await Chat.findOne({
      _id: groupId
      }).populate('users', '-password')

     if (!privilegeCheck) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Bad Request! Please check the params.' })
     }
     
     const userAlreadyExists= await Chat.findOne({_id: groupId, users: {
       $in: [targetUserId]
     }}).populate('users', '-password')
    //  console.log('already exsits value', userAlreadyExists)
    //  User Not Available
    if (!userAlreadyExists) {
      const updatedChat = await Chat.findByIdAndUpdate({_id: groupId}, {$push: {
        users: targetUserId
      }}, {new:true}).populate('users', '-password')
      return res.status(200).json({status: true, statusCode: 200, message: "User Added Successfully", chatData: updatedChat})
    }
    return res.status(200).json({status: true, statusCode: 200, message: "User Already Exists", chatData: userAlreadyExists})

  } catch (error) {
    console.log("error", error)
    console.log('ERROR - GET ALL CHATS')
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error})
  }
};

// Remove User from Group Chaat
const removeFromChatGroup = async (req, res) => {
  try {
    const  {senderId, groupId, targetUserId} = req.query
    // console.log(senderId, groupId, targetUserId)
    // Group Existence Check
    const isGroupExists = await Chat.findOne({_id: groupId})
    if (!isGroupExists) {
      return res.status(400).json({status: false, statusCode: 400, message: "Group Doesn't Exist"})
    }
    // Privilege Check
    const targetGroup = await Chat.findOne({_id: groupId}).populate("groupAdmin", "-password")
    if (targetGroup.groupAdmin?._id.toString() !== senderId) {
      return res.status(403).json({status: false, statusCode: 403, message: 'Only Group Admins can Remove!', chatData: targetGroup })
    }
    // Remove from group
    const updatedChat = await Chat.findByIdAndUpdate({_id: groupId},  { $pullAll: { users: [targetUserId] } }, {new:true}).populate('users', '-password')
    return res.status(200).json({status: true, statusCode: 200, message: "User Removed Successfully", chatData: updatedChat})
  } catch (error) {
    console.log("error", error)
    console.log('ERROR - GET ALL CHATS')
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error})
  }
};

// Send Message to Chat
const sendMessage = async (req, res, next) => {
  try {
    const {senderId, chatId} = req.query
    const {message} = req.body
    // console.log('values', senderId, chatId)
    const isGroupExists = await Chat.findById({_id: chatId})
    if (!isGroupExists) {
      return res.status(400).json({status: false, statusCode: 400, message: 'Chat Not available.'})
    }
    const requestedMessage = {
      sender: senderId,
      chat: chatId,
      content: message,
      likedUsers: []
    }
    // console.log(requestedMessage)
    let createdMessage = await Message.create(requestedMessage)
    createdMessage = await createdMessage.populate("sender", "firstName lastName emailId _id").execPopulate();
    createdMessage = await createdMessage.populate("chat").execPopulate();
    createdMessage = await createdMessage.populate('likedUsers').execPopulate();
    createdMessage = await User.populate(createdMessage, {
      path: "chat.users",
      select: "firstName lastName emailId _id",
    });

    const updatedChat = await Chat.findByIdAndUpdate({_id: chatId}, {latestMessage: createdMessage._id}, {new: true})
    // const updatedMessage = await Message.findById({_id: requestedMessage._id}).populate('sender', '-password').
    // populate('chat', '-password')
    // .populate('likedUsers', '-password')
    res.status(201).json({status: true, statusCode: 201, message: 'Messaged added to Chat', messageData: createdMessage})
  } catch (error) {
    console.log(error)
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Get Messages for Chat
const getChatMessages = async (req, res, next) => {
  try {
    const {chatId} = req.query
    const messagesData = await Message.find({chat: chatId}).populate('sender', '-password').populate('likedUsers', '-password')
    if (!messagesData) {
      return res.status(400).json({status: false, statusCode: 400, message: 'No Messages Found', messagesData: []})
    }
    return res.status(200).json({status: true, statusCode: 200, message: 'Messaged Retrieved', messagesData})
  } catch (error) {
    console.log(error)
    return res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error: {...error}})
  }
}

// Like a Message
const toggleLike = async (req, res) => {
  try {
    const  {senderId, chatId, messageId} = req.query
    // console.log(senderId, chatId, messageId)
    // User in Group / Chat Check
    const isUserAvailable = await Chat.findOne({_id: chatId, users: {$elemMatch: {$eq: senderId}}})
    if (!isUserAvailable) {
      return res.status(400).json({status: true, statusCode: 400, message: "User Not in the chat list" })
    }
     const userAlreadyLiked = await Message.findOne({_id: messageId, chat: chatId, likedUsers: {
       $in: [senderId]
     }})
     // Add Like
     if (!userAlreadyLiked) {
      const updatedMessage = await Message.findByIdAndUpdate({_id: messageId, chat: chatId}, {$push: {
        likedUsers: senderId
      }}, {new:true}).populate('likedUsers', '-password')
      return res.status(200).json({status: true, statusCode: 200, message: "Message Liked", messageData: updatedMessage})
      // Remove Like
     } else {
      const updatedMessage = await Message.findByIdAndUpdate({_id: messageId, chat: chatId},  { $pullAll: { likedUsers: [senderId] } }, {new:true}).populate('likedUsers', '-password')
      return res.status(200).json({status: true, statusCode: 200, message: "Message Like Removed", messageData: updatedMessage})
     }
  } catch (error) {
    console.log("error", error)
    console.log('ERROR - GET ALL CHATS')
    res.status(500).json({status: false, statusCode: 500, message: 'Internal Server Error', error})
  }
};



module.exports = {getAllChats, createChatGroup, createOrGetChat, removeChatGroup, addToChatGroup, removeFromChatGroup, sendMessage, toggleLike, getChatMessages, getGroupMembers}