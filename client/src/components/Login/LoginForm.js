import React from 'react'
import { BiUser } from 'react-icons/bi'
import { VscError, VscLock } from 'react-icons/vsc'
import { IoMdInformationCircle } from 'react-icons/io'

const LoginForm = () => {
  return (
    <div className='login-form__container'>
      <div className="login-header">
        <button className='login-header-btn admin-btn btn-reset active' title='For User Login'>User Login</button>
        <button className='login-header-btn user-btn btn-reset' title='For Admin Users only'>Admin Login</button>
      </div>
      <div className="login-body">
        <div className="login-input__container">
          <BiUser className="login-icons" />
          <input type="text" placeholder='Your email' className='input-reset input' />
          <VscError title="Error in email id" className='login-error-icon' />
          <div className="error-div">
            <IoMdInformationCircle className="error-div-icon" />
            <span className='error-text'>Error in email id</span>
          </div>
        </div>
        <div className="login-input__container">
          <VscLock className="login-icons" />
          <input type="password" placeholder='Your password' className='input-reset input' />
          <VscError title="Error in password id" className='login-error-icon' />
          <div className="error-div">
            <IoMdInformationCircle className="error-div-icon" />
            <span className='error-text'>Error in password</span>
          </div>
        </div>
        <button className='login-btn btn-reset'>Login</button>
      </div>
      <p className='warning-text'>Warning: Admin logins are only for authorized users!</p>
    </div>
  )
}

export default LoginForm