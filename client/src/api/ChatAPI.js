import { API } from "../utils/API";
import {
  GET_CHATS,
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

