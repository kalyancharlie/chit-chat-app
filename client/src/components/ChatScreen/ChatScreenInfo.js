import React from 'react'
import Icon from '../Icon'
import ChatMemberCount from './ChatMemberCount'

import './ChatScreen.css'

const ChatScreenInfo = () => {
  return (
    <div className='chat-screen-info__container'>
      <Icon firstName='Kalyan' lastName='Bathula' classNames={['icon__sm', 'chat-info-icon']} />
      <p style={{fontWeight: 600}}>Youtube DSA Discussion</p>
      <ChatMemberCount />
      {/* <IoMenuOutline className="menu-icon" title='Group/Chat Settings' /> */}
    </div>
  )
}

export default ChatScreenInfo