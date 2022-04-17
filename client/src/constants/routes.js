// ADMIN APIS
// POST
export const ADD_USER = '/api/v1/users/register/'
// PATCH - userId
export const UPDATE_USER = '/api/v1/users/update/'
// DELETE - userId
export const REMOVE_USER = '/api/v1/users/remove/'
// GET
export const GET_USERS = '/api/v1/users/all'
// GET - userId
export const GET_USER = '/api/v1/users/user'
// GET - query
export const SEARCH_USERS = '/api/v1/users/search?q='

// CHAT APIS
// GET
export const GET_CHATS = '/api/v1/chats/all/'
// POST senderId targetId
export const START_CHAT = '/api/v1/chats/start-chat'
// POST - groupName, userId
export const CREATE_GROUP = '/api/v1/chats/create-group/'
// DELETE - groupId, userId
export const REMOVE_GROUP = '/api/v1/chats/remove-group/'
// POST - groupId, userId
export const ADD_TO_GROUP = '/api/v1/chats/add-to-group/'
// PATCH - groupId, userId
export const REMOVE_FROM_GROUP = '/api/v1/chats/remove-from-group/'

// GET - chatId
export const GET_CHAT_MESSAGES = '/api/v1/chats/messages/'
// POST - messageId & chatId & userId
export const ADD_LIKE = '/api/v1/chats/messages/like/' 
// PATCH - messageId & chatId & userId
export const REMOVE_LIKE = '/api/v1/chats/messages/dislike/'
// POST senderId, targetId
export const SEND_MESSAGE = '/api/v1/chats/messages/'

// AUTH API
// GET
export const ADMIN_SIGIN = 'api/v1/auth/signin/admin'
export const USER_SIGIN = 'api/v1/auth/signin/user'
 