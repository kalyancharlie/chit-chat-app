import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({ chatMessages }) => {
  console.log("messages list", chatMessages)
  return <>
  {chatMessages?.map(messageObj => {
    return <MessageItem key={messageObj?._id} messageObj={messageObj} />
  })}
  </>
};

export default MessageList;
