import React from 'react'
import LoginForm from '../../components/Login/LoginForm'
import './styles.css'
import AppLogo from '../../assets/app-logo.png'

const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className="login-page__header">
        <h3 className='app-name'>ChitChat <img src={AppLogo} className='app-logo' alt='ChitChat Logo'/></h3>
        <p className='app-desc'>Keep in touch with your friends and family 😍</p>
      </div>
      <LoginForm />
    </div>
  )
}

export default LoginPage