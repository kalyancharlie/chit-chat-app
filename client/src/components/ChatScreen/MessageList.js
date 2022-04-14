import React from 'react'
import MessageItem from './MessageItem'

const val =" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quasi numquam laborum quas quod ratione repudiandae autem tenetur unde placeat temporibus aperiam, voluptates, provident assumenda eaque itaque repellendus consequatur magni?"

const MessageList = () => {
  return (
    <>
      <MessageItem content={val} sender="Kalyan Bathula" time="12:30 PM" likes={12} />
      <MessageItem content="Hi" sender="Srihari Bathula" time="12:30 PM" likes={1} />
      <MessageItem content="How are you" sender="Kalyan Bathula" time="12:31 PM" likes={0} />
      <MessageItem content="I am good. How about you?" sender="Srihari Bathula" time="12:31 PM" likes={0} />
      <MessageItem content="Fine. Thank You" sender="Kalyan Bathula" time="12:31 PM" likes={0} />
      <MessageItem content="Have a great day!!" sender="Kalyan Bathula" time="12:31 PM" likes={0} />
      <MessageItem content="You too." sender="Srihari Bathula" time="12:32 PM" likes={0} />
      <MessageItem content="Bye" sender="Kalyan Bathula" time="12:32 PM" likes={0} />
      <MessageItem content="Good Night" sender="Srihari Bathula" time="12:33 PM" likes={0} />
      <MessageItem content="Bye" sender="Srihari Bathula" time="12:34 PM" likes={0} />
    </>
  )
}

export default MessageList