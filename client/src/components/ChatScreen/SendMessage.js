import React from 'react'
import {IoSend} from 'react-icons/io5'

const SendMessage = () => {
  return (
    <div className='send-message__container'>
      <input type="text" placeholder='Start Typing...' className='send-message-input' />
      <button className='send-message-btn' title='Send Message'><IoSend /></button>
    </div>
  )
}

export default SendMessage