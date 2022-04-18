import React from "react";
import ChatScreenInfo from "./ChatScreenInfo";
import ChatArea from "./ChatArea";

const ChatScreen = () => {
  return (
    <div className="chat-screen__container">
      <ChatScreenInfo />
      <ChatArea />
    </div>
  );
};

export default ChatScreen;
