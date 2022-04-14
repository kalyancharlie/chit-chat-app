import React from 'react'
import './ChatSettings.css'
import {FiLogOut} from 'react-icons/fi'
import GroupInfo from './GroupInfo'
import SearchUser from './SearchUser'
import GroupMembersList from './GroupMembersList'

const ChatSettings = () => {
  return (
    <div className='chat-settings__container'>
      <button className='logout-btn' title='Click to Logout'><FiLogOut /><span>Logout</span></button>
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