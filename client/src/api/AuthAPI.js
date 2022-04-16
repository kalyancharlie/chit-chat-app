import { API } from "../utils/API";
import {
  ADMIN_SIGIN,
  USER_SIGIN,
} from "../constants/routes";
import log from "../utils/logger";

// Authenticate User
export const verifyUserLogin = async ({emailId, password, isAdmin}) => {
  try {
    log('userdetails', emailId, password, isAdmin)
    const singInEndPoint = isAdmin ? ADMIN_SIGIN : USER_SIGIN
    const resp = await API.post(singInEndPoint, {emailId, password, isAdmin})
    // log('response status', resp)
    return resp
  } catch (error) {
    log('error in auth block')
    return error?.response
  }
};
