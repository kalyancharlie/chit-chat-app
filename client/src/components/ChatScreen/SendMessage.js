import React, { useState } from 'react'
import {IoSend} from 'react-icons/io5'
import { sendMessage } from '../../api/ChatAPI'
import useAppContext from '../../hooks/useAppContext'
import { getTargetUsersObj } from '../../utils/util'

const SendMessage = ({setChatMessages, chatMessages, socket}) => {
  const {user, activeChat} = useAppContext()
  const [messageText, setMessageText] = useState('')
  // Send Message Handler
  const sendMessageHandler = async (e) => {
    try {
      console.log('activechat list', activeChat)
      const otherUsers = getTargetUsersObj(activeChat?.users, user?._id)
      console.log('otherusers list', otherUsers)

      if(e) e.preventDefault()
      const resp = await sendMessage({senderId: user?._id, chatId: activeChat?._id, message: messageText})
      socket.emit('SEND_MESSAGE', resp.messageData)
      console.log('CHECK THIS FORMAT', resp)
      if (resp?.status) {
        console.log("before update messages", chatMessages)
        const newChatMessages = [...chatMessages]
        newChatMessages.push(resp?.messageData)
        setChatMessages(() => (newChatMessages))
        console.log("after update messages", chatMessages)
        console.log('messaged submitted to db')
      }
      setMessageText(() => (''))
    } catch (error) {
      console.log('error in sending message')
      console.log(error)
    }
  }
  return (
    <div className='send-message__container'>
      <input type="text" placeholder='Start Typing...' className='send-message-input' value={messageText} onChange={(e) => {
        e.preventDefault()
        setMessageText(() => (e.target.value))
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessageHandler(e)
        }
      }} 
      />
      <button className='send-message-btn' title='Send Message' onClick={sendMessageHandler}><IoSend /></button>
    </div>
  )
}

export default SendMessage