import React from 'react'

import UserInfo from './UserInfo'
import Search from '../Search'
import ChatList from './ChatList'

import './Chats.css'

const Chats = () => {
  return (
    <div className='chats__container'>
      <UserInfo />
      <div className="chats__main-container">
        <Search />
        <ChatList />
        <button>Create</button>
      </div>
    </div>
  )
}

export default Chats