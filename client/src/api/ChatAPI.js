import { API } from "../utils/API";
import {
  GET_CHATS,
  GET_GROUP_MEMBERS,
  START_CHAT,
  CREATE_GROUP,
  REMOVE_GROUP,
  ADD_TO_GROUP,
  REMOVE_FROM_GROUP,
  GET_CHAT_MESSAGES,
  TOGGLE_LIKE,
  SEND_MESSAGE
} from "../constants/routes";

// GET USER CHATS
export const getChats = async (userId) => {
  try {
    const endPoint = GET_CHATS + userId
    const resp = await API.get(endPoint, {})
    const {data} = resp
    return data
  } catch (error) {
    console.log('error in chat apis')
    console.log(error)
    return error?.response
  }
};

// CREATE/ACCESS SINGLE CHAT
export const createOrAccessChat = async ({senderId, targetUserId}) => {
  try {
    const resp = await API.post(START_CHAT,{}, {params: {
      senderId,
      targetUserId
    }})
    const {data} = resp
    return data
  } catch (error) {
    console.log('error in chat apis')
    console.log(error)
    return error?.response
  }
};

// CREATE GROUP CHAT
export const createGroup = async ({senderId, groupName}) => {
  try {
    const resp = await API.post(CREATE_GROUP,{groupName}, {params: {
      senderId,
    }})
    const {data} = resp
    return data
  } catch (error) {
    console.log('error in chat apis')
    console.log(error)
    return error?.response
  }
};

// REMOVE GROUP CHAT
export const removeGroup = async ({senderId, chatId}) => {
  try {
    const resp = await API.delete(REMOVE_GROUP, {params: {
      senderId,
      chatId
    }})
    const {data} = resp
    return data
  } catch (error) {
    console.log('error in chat apis')
    console.log(error)
    return error?.response
  }
};

// FETCH GROUP MEMBERS
export const getGroupMembers = async ({senderId, chatId}) => {
  try {
    const resp = await API.get(GET_GROUP_MEMBERS, {params: {
      senderId, chatId
    }})
    const {data} = resp
    return data
  } catch (error) {
    console.log('error in chat apis')
    console.log(error)
    return error?.response
  }
};

// ADD USER TO GROUP CHAT
export const addUserToGroup = async ({senderId, groupId, targetUserId}) => {
  try {
    const resp = await API.post(ADD_TO_GROUP,{}, {params: {
      senderId,
      groupId,
      targetUserId
    }})
    const {data} = resp
    return data
  } catch (error) {
    console.log('error in chat apis')
    console.log(error)
    return error?.response
  }
};

// REMOVE USER FROM GROUP CHAT
export const removeUserFromGroup = async ({senderId, groupId, targetUserId}) => {
  try {
    const resp = await API.delete(REMOVE_FROM_GROUP, {params: {
      senderId,
      groupId,
      targetUserId
    }})
    const {data} = resp
    return data
  } catch (error) {
    console.log('error in chat apis')
    console.log(error)
    return error?.response
  }
};