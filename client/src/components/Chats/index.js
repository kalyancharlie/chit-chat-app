import React, { useState } from 'react'

import UserInfo from './UserInfo'
import Search from '../Search'
import ChatList from './ChatList'

import './Chats.css'
import SearchNewUsersList from './SearchNewUsersList'

const Chats = () => {
  const [searchUserText, setSearchUserText] = useState('')
  return (
    <div className='chats__container'>
      <UserInfo />
      <div className="chats__main-container">
        <Search setInputValue={setSearchUserText} textValue={searchUserText} />
        {searchUserText ? <SearchNewUsersList searchUserText={searchUserText} setSearchUserText={setSearchUserText} /> : <ChatList />} 
      </div>
    </div>
  )
}

export default Chats