/* ************************************* */
// ADMIN APIS
/* ************************************* */
// POST
export const ADD_USER = '/api/v1/users/register/'

// PATCH - ?userId
export const UPDATE_USER = '/api/v1/users/update/'

// DELETE - ?userId
export const REMOVE_USER = '/api/v1/users/remove/'

// GET
export const GET_USERS = '/api/v1/users/all'

// GET - ?userId
export const GET_USER = '/api/v1/users/user'

// GET - ?query
export const SEARCH_USERS = '/api/v1/users/search?q='

/* ************************************* */
// CHAT APIS
/* ************************************* */
// GET - :userId
export const GET_CHATS = '/api/v1/chats/all/'

// POST ?senderId&targetUserId
export const START_CHAT = '/api/v1/chats/start-chat'

// POST - body:groupName, ?senderId
export const CREATE_GROUP = '/api/v1/chats/create-group'

// DELETE - ?senderId&chatId
export const REMOVE_GROUP = '/api/v1/chats/remove-group'

// POST - ?senderId&groupId&targetUserId
export const ADD_TO_GROUP = '/api/v1/chats/add-to-group'

// DELETE - ?senderId&groupId&targetUserId
export const REMOVE_FROM_GROUP = '/api/v1/chats/remove-from-group'

// GET - ?chatId
export const GET_CHAT_MESSAGES = '/api/v1/chats/messages'

// POST - ?senderId&chatId&messageId
export const TOGGLE_LIKE = '/api/v1/chats/messages/toggle-like'

// POST ?senderId&chatId
export const SEND_MESSAGE = '/api/v1/chats/messages'

/* ************************************* */
// AUTH APIS
/* ************************************* */
// GET
export const ADMIN_SIGIN = 'api/v1/auth/signin/admin'
export const USER_SIGIN = 'api/v1/auth/signin/user'
 