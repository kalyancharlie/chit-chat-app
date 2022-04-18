import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { getUserNameFromChatObj } from "../../utils/util";
import Icon from "../Icon";
import ChatMemberCount from "./ChatMemberCount";
import { getFirstAndLastName } from "../../utils/util";
import { BsArrowLeft } from "react-icons/bs";
import  {useNavigate} from 'react-router-dom'
import useMediaQuery from "../../hooks/useMediaQuery";
import {IoMenuOutline} from 'react-icons/io5'


import "./ChatScreen.css";

const ChatScreenInfo = () => {
  const navigator = useNavigate()
  const isMobileView = useMediaQuery("(max-width: 550px)");
  const { activeChat, user } = useAppContext();

  return (
    <div className="chat-screen-info__container">
      {!activeChat?.isGroupChat ? (
      <div className="nav-icon-wrapper">
       <BsArrowLeft className="arrow-icon nav-icon-left" title="Go back" onClick={(e) => {
        e.preventDefault()
        navigator('/chats')
      }} />
        <Icon 
          firstName={
            getFirstAndLastName(
              getUserNameFromChatObj(activeChat, user?._id)
            )[0]
          }
          lastName={
            getFirstAndLastName(
              getUserNameFromChatObj(activeChat, user?._id)
            )[1]
          }
          classNames={["icon__xs"]}
        />
      </div>
      ) : (
        <div className="nav-icon-wrapper">
        <BsArrowLeft className="arrow-icon nav-icon-left" title="Go back" onClick={(e) => {
        e.preventDefault()
        navigator('/chats')
      }} />
        <Icon
          firstName={getFirstAndLastName(activeChat?.chatName)[0]}
          lastName={getFirstAndLastName(activeChat?.chatName)[1]}
          classNames={["icon__xs"]}
        />
        </div>
      )}
      <p style={{ fontWeight: 600 }}>{`${
        !activeChat?.isGroupChat
          ? getUserNameFromChatObj(activeChat, user?._id)
          : activeChat?.chatName
      }`}</p>
      {activeChat?.isGroupChat && <ChatMemberCount activeChat={activeChat} />}
       <IoMenuOutline className="menu-icon" title='Group/Chat Settings' onClick={(e) => {
        e.preventDefault()
        if(activeChat?._id) {
          navigator(`/chats/${activeChat?._id}/settings`)
        }
      }} />
    </div>
  );
};

export default ChatScreenInfo;
