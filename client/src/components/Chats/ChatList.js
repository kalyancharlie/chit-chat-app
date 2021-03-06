import React, {useCallback, useEffect} from 'react'
import useAppContext from '../../hooks/useAppContext'
import ChatItem from './ChatItem'
import {getChats} from '../../api/ChatAPI'

const ChatList = () => {
  const {user, chats, setChats} = useAppContext()

  // Fetch User Chats
  const fetchUserChats = useCallback(async () => {
    try {
      const data = await getChats(user?._id)
      console.log('api called', data)
      if (!data) return
      if (data?.status) {
        setChats(() => (data.chatsData))
      } else {
        alert('error in fetching chats')
      }
    } catch (error) {
      
    }
  }, [user])

  useEffect(() => {
    if(!user?._id) return
    fetchUserChats()
   console.log('chatlist rendered with user id change')
  }, [fetchUserChats, user?._id])
  
  return (
    <div className='chat-list__container'>
      {chats && chats.map(chat => {
        const {_id, chatName, latestMessage, isGroupChat} = chat
        return <ChatItem key={_id} chatId={_id} chatName={chatName} latestMessage={latestMessage?.content || ''} lastMessageTS={latestMessage?.createdAt || ''} isGroupChat={isGroupChat} chatObj={chat} />
      })}
    </div>
  )
}

export default ChatList