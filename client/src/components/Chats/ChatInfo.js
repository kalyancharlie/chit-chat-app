import React from 'react'
import useAppContext from '../../hooks/useAppContext'
import { getUserNameFromChatObj } from '../../utils/util'

const ChatInfo = ({chatName="", latestMessage="No Latest Message", isGroupChat=false, chatObj}) => {
  const {user} = useAppContext()
  // console.log('names', chatObj)
  return (
    <div className='chat-info__container'>
      <h5 className='chat-info__name'>{`${!isGroupChat ? getUserNameFromChatObj(chatObj, user._id) : chatName}`}</h5>
      <p className='chat-info__message'>{latestMessage}</p>
    </div>
  )
}

export default ChatInfo