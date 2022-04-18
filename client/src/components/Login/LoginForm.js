import React, { useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { VscError, VscLock } from "react-icons/vsc";
import { IoMdInformationCircle } from "react-icons/io";
import log from "../../utils/logger";
import {verifyUserLogin} from '../../api/AuthAPI'
import {EMAIL_REGEX} from '../../constants/constants'
import {useNavigate} from 'react-router-dom'
import useAppContext from "../../hooks/useAppContext";

const LoginForm = () => {
  const {setUser} = useAppContext()
  const navigator = useNavigate();
  const [loginType, setLoginType] = useState({ isUser: true, isAdmin: false });
  const [error, setError] = useState({emailId: false, password: false})
  const [formState, setFormState] = useState({emailId: 'kalyanchinna123@gmail.com', password: '12345'});

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo) {
      setUser(() => ({...userInfo}))
      navigator('/chats', {replace: true})
    } 
  }, [])

  // Login Type Listener
  const loginTypeListener = (e) => {
    if (e) e.preventDefault();
    if (e.target.name === 'user') {
      setLoginType(() => ({isUser: true, isAdmin: false}))
    } else {
      setLoginType(() => ({isUser: false, isAdmin: true}))
    }
  };

  // Form Change Listener
  const formChangeListener = (e) => {
    if (e) e.preventDefault();
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value.trim() }));
  };
  
  // Validate Fields
  const validateFields = () => {
    let isInvalid = false
    if(!formState.emailId) {
      setError((prev) => ({...prev, emailId: true}))
      isInvalid = true;
    } else {
      setError((prev) => ({...prev, emailId: false}))
    }
    if(!formState.password || !formState.password === null) { 
      setError((prev) => ({...prev, password: true}))
      isInvalid = true;
    } else {
      setError((prev) => ({...prev, password: false}))
    }
    return isInvalid
  }

  // Authenticate User
  const authenticateUser = async (e) => {
    try {
      if (e) e.preventDefault();
      if (validateFields()) return
      console.log('user details', formState)
      const loginStatus = await verifyUserLogin({...formState, isAdmin: loginType.isAdmin})
      if (loginStatus) {
        const {data} = loginStatus
        if (loginType.isAdmin && data.status) {
          const {user} = data
          log('user data', user)
          localStorage.setItem("userInfo", JSON.stringify(user));
          setUser(() => (user))
          navigator('/admin-dashboard', {replace:true})
        } else if (data.status) {
          const {user} = data
          log('user data', user)
          localStorage.setItem("userInfo", JSON.stringify(user));
          setUser(() => (user))
          navigator('/chats', {replace:true})
        }
      }
      log('login status', loginStatus)
    } catch (error) {
      log("error in login", error);
    }
  };

  useEffect(() => {
    validateFields()
  }, [formState])

  return (
    <div className="login-form__container">
      <div className="login-header">
        <button
          name="user"
          className={`${
            loginType.isUser
              ? "login-header-btn admin-btn btn-reset active"
              : "login-header-btn admin-btn btn-reset"
          }`}
          title="For User Login"
          onClick={loginTypeListener}
        >
          User Login
        </button>
        <button
          name="admin"
          className={`${
            loginType.isAdmin
              ? "login-header-btn admin-btn btn-reset active"
              : "login-header-btn admin-btn btn-reset"
          }`}
          title="For Admin Users only"
          onClick={loginTypeListener}
        >
          Admin Login
        </button>
      </div>
      <form className={`${error.emailId || error.password ? 'login-body error-adjust' : 'login-body'}`}>
        <div className="login-input__container">
          <BiUser className="login-icons" />
          <input
            type="text"
            placeholder="Your email"
            name="emailId"
            className="input-reset input"
            onChange={formChangeListener}
            value={formState.emailId}
            required
          />
          <VscError title="Error in email id" className="login-error-icon" />
          <div className={`${error.emailId ? 'error-div error-active' : 'error-div'}`} >
            <IoMdInformationCircle className="error-div-icon" />
            <span className="error-text">Error in email id</span>
          </div>
        </div>
        <div className="login-input__container">
          <VscLock className="login-icons" />
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="input-reset input"
            onChange={formChangeListener}
            required
            value={formState.password}
          />
          <VscError title="Error in password id" className="login-error-icon" />
          <div className={`${error.password ? 'error-div error-active' : 'error-div'}`}>
            <IoMdInformationCircle className="error-div-icon" />
            <span className="error-text">Error in password</span>
          </div>
        </div>
        <button className={`${error.emailId || error.password ? 'login-btn btn-reset disabled' : 'login-btn btn-reset'}`} onClick={authenticateUser} disabled={error.emailId || error.password} >Login</button>
      </form>
      {loginType.isAdmin && <p className="warning-text">
        Warning: Admin logins are only for authorized users!
      </p>}
    </div>
  );
};

export default LoginForm;
