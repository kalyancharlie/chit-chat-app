import React from "react";
import useAppContext from "../../hooks/useAppContext";
import { getUserNameFromChatObj } from "../../utils/util";
import Icon from "../Icon";
import ChatMemberCount from "./ChatMemberCount";
import { getFirstAndLastName } from "../../utils/util";

import "./ChatScreen.css";

const ChatScreenInfo = () => {
  const { activeChat, user } = useAppContext();

  return (
    <div className="chat-screen-info__container">
      {!activeChat?.isGroupChat ? (
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
      ) : (
        <Icon
          firstName={getFirstAndLastName(activeChat?.chatName)[0]}
          lastName={getFirstAndLastName(activeChat?.chatName)[1]}
          classNames={["icon__xs"]}
        />
      )}
      <p style={{ fontWeight: 600 }}>{`${
        !activeChat?.isGroupChat
          ? getUserNameFromChatObj(activeChat, user?._id)
          : activeChat?.chatName
      }`}</p>
      {activeChat?.isGroupChat && <ChatMemberCount activeChat={activeChat} />}
      {/* <IoMenuOutline className="menu-icon" title='Group/Chat Settings' /> */}
    </div>
  );
};

export default ChatScreenInfo;
