import React, { useEffect } from 'react'
import Icon from '../Icon'
import ChatInfo from './ChatInfo'
import ChatActivity from './ChatActivity'
import { getFirstAndLastName } from '../../utils/util'
import useAppContext from '../../hooks/useAppContext'
import {useNavigate} from 'react-router-dom'

const ChatItem = ({chatId, chatName="", latestMessage="", lastMessageTS="", isGroupChat=false, chatObj}) => {
  const {activeChat, setActiveChat} = useAppContext();
  const navigator = useNavigate()

  // Active Chat Handler
  const activeChatHandler = (e) => {
    if (e) e.preventDefault()
    setActiveChat(() => ({...chatObj}))
    navigator('/chats/'+chatId)
  }
  // Chat Change Listener
  useEffect(() => {
    console.log('selecte chat obj', activeChat)
  }, [])

  return (
    <div className={`${activeChat?._id === chatId ? 'chat-item__container active-chat' : 'chat-item__container'}`} onClick={activeChatHandler}>
      <Icon firstName={getFirstAndLastName(chatName)[0]} lastName={getFirstAndLastName(chatName)[1]} classNames={['icon__sm']} />
      <ChatInfo chatName={chatName} latestMessage={latestMessage} />
      <ChatActivity lastMessageTS={lastMessageTS} />
    </div>
  )
}

export default ChatItem