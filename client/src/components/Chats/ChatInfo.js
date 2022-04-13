import React from 'react'

const ChatInfo = ({chatName="Chat Name Group", message="This message is delivered."}) => {
  return (
    <div className='chat-info__container'>
      <h5 className='chat-info__name'>{chatName}</h5>
      <p className='chat-info__message'>{message}</p>
    </div>
  )
}

export default ChatInfo