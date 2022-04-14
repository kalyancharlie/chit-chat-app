import React from "react";
import MessageList from "./MessageList";
import SendMessage from "./SendMessage";

const ChatArea = () => {
  return (
    <>
      <div className="chat-area__container">
        <MessageList />
      </div>
      <SendMessage />
    </>
  );
};

export default ChatArea;
