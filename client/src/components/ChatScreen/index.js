import React from "react";
import ChatScreenInfo from "./ChatScreenInfo";
import ChatArea from "./ChatArea";
import { IoMenuOutline } from "react-icons/io5";

const ChatScreen = () => {
  return (
    <div className="chat-screen__container">
      <IoMenuOutline className="menu-icon left-menu" title="Show/Hide Chats" />
      <IoMenuOutline
        className="menu-icon right-menu"
        title="Show/Hide Chat Settings"
      />
      <ChatScreenInfo />
      <ChatArea />
    </div>
  );
};

export default ChatScreen;
