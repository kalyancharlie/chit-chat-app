import React from 'react'

const ChatMemberCount = ({activeChat}) => {
  console.log(activeChat, 'active adata')
  return (
    <p className='chat-member-count-info'>({activeChat?.users?.length} Members)</p>
  )
}

export default ChatMemberCount