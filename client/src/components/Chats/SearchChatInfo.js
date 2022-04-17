import React from 'react'

const SearchChatInfo = ({chatName="", latestMessage="No Latest Message"}) => {
  return (
    <div className='chat-info__container'>
      <h5 className='chat-info__name'>{chatName}</h5>
      <p className='chat-info__message'>{latestMessage}</p>
    </div>
  )
}

export default SearchChatInfo