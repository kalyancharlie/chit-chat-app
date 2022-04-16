import { API } from "../utils/API";
import {
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  GET_USERS,
  GET_USER,
  SEARCH_USERS,
} from "../constants/routes";
import log from "../utils/logger";

// Add User
export const addUser = async ({firstName, lastName, emailId, password}) => {
  try {
    const resp = await API.post(ADD_USER, {firstName, lastName, emailId, password})
    // log(resp)
    return resp
  } catch (error) {
    return null
  }
};

// Update User
export const updateUser = async ({
  userId,
  firstName,
  lastName,
  emailId,
  password,
}) => {
  try {
    const endPoint = UPDATE_USER + userId
    const resp = await API.patch(endPoint, {firstName, lastName, emailId, password})
    // log(resp)
    return resp
  } catch (error) {}
};

// Remove User
export const removeUser = async (userId ) => {
  try {
    const endPoint = REMOVE_USER + userId
    const resp = await API.delete(endPoint, )
    // log(resp)
    return resp
  } catch (error) {}
};

// Get All Users
export const getUsersInfo = async () => {
  try {
    const resp = await API.get(GET_USERS, {})
    // log(resp)
    return resp
  } catch (error) {}
};

// Get User
export const getUserInfo = async ({ userId }) => {
  try {
  } catch (error) {}
};

// Search Users
export const searchUsers = async ( query ) => {
  try {
    const endPoint = `${SEARCH_USERS}${query}`
    const resp = await API.get(endPoint, {})
    // log(resp)
    return resp
  } catch (error) {}
};

