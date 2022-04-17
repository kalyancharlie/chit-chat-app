import React from 'react'
import {getChatTime} from '../../utils/util'

const ChatActivity = ({lastMessageTS=""}) => {
  return (
    <div className='chat-activity__container'>
      <p className='chat-last-time'>{`${lastMessageTS ? getChatTime(lastMessageTS) : ''}`}</p>
      {/* <div className='chat__notification unread' title='Unread Message'></div> */}
    </div>
  )
}

export default ChatActivity