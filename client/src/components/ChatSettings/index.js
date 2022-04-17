import React from 'react'
import './ChatSettings.css'
import {FiLogOut} from 'react-icons/fi'
import GroupInfo from './GroupInfo'
import SearchUser from './SearchUser'
import GroupMembersList from './GroupMembersList'
import {useNavigate} from 'react-router-dom'
import useAppContext from '../../hooks/useAppContext'

const ChatSettings = () => {
  const navigator = useNavigate()
  const {setUser} = useAppContext()
  // Logout Handler
  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem('userInfo')
    setUser(() => ({token: '', emailId: ''}))
    navigator('/login', {replace: true})
  }
  return (
    <div className='chat-settings__container'>
      <button className='logout-btn' title='Click to Logout' onClick={logoutHandler}><FiLogOut /><span>Logout</span></button>
      <div className='chat-settings-main__container'>
        <GroupInfo />
        <SearchUser />
        <hr className='hr' />
        <GroupMembersList />
      </div>
    </div>
  )
}

export default ChatSettings