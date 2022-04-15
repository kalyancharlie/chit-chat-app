import React from 'react'

import UserInfo from './UserInfo'
import Search from '../Search'
import ChatList from './ChatList'

import './Chats.css'
import SearchNewUsersList from './SearchNewUsersList'

const Chats = () => {
  return (
    <div className='chats__container'>
      <UserInfo />
      <div className="chats__main-container">
        <Search />
        <ChatList />
        {/* <SearchNewUsersList /> */}
      </div>
    </div>
  )
}

export default Chats