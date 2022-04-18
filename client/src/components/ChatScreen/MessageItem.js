import React from "react";
import {  getMessageTime, isCurrentUser } from "../../utils/util";
import Icon from "../Icon";
import { BiLike } from 'react-icons/bi'
import useAppContext from "../../hooks/useAppContext";

const MessageItem = ({_id, chat, likedUsers, createdAt, content, sender, messageObj }) => {
  const {user} = useAppContext()

  return (
    <div className={`${isCurrentUser(messageObj, user?._id) ? 'message-item__container message-right' : 'message-item__container message-left'}`}>
      <Icon
        firstName={messageObj?.sender?.firstName}
        lastName={messageObj?.sender?.lastName}
        classNames={['icon__xxs']}
      />
      <div className={`${isCurrentUser(messageObj, user?._id) ? 'message__container receiver' : 'message__container sender'}`}>
        <div className="message-header__container">
          <h5 className="message-sender">{messageObj?.sender?.firstName} {messageObj?.sender?.lastName}</h5>
          <div className="message-likes__container">
            {likedUsers?.length > 0 && <p>{messageObj?.likedUsers?.length}</p>} 
            <BiLike className="like-icon" />
          </div>
        </div>
        <div className="message-body__container">
          <p className="message-content">{messageObj?.content}</p>
        </div>
        <p className="message-time">{getMessageTime(messageObj?.createdAt)}</p>
      </div>
    </div>
  );
};

export default MessageItem;
