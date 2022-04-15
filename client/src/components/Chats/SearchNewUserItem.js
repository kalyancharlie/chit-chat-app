import React from 'react'
import Icon from '../Icon'
import ChatInfo from './ChatInfo'
import ChatActivity from './ChatActivity'

const SearchNewUserItem = () => {
  return (
    <div className='chat-item__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__sm']} />
      <ChatInfo />
    </div>
  )
}

export default SearchNewUserItem