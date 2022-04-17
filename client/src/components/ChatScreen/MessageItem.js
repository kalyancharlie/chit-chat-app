import React from "react";
import { getFirstAndLastName } from "../../utils/util";
import Icon from "../Icon";
import { BiLike } from 'react-icons/bi'

const MessageItem = ({ content, sender, time, likes }) => {
  let classes = []
  if (sender === 'Kalyan Bathula') {
    classes = ['message-item__container', 'message-right']
  } else {
    classes = ['message-item__container', 'message-left']
  }
  return (
    <div className={classes.join(' ')}>
      <Icon
        firstName={getFirstAndLastName(sender)[0]}
        lastName={getFirstAndLastName(sender)[1]}
        classNames={['icon__xxs']}
      />
      <div className={`${sender === 'Kalyan Bathula' ? 'message__container receiver' : 'message__container sender'}`}>
        <div className="message-header__container">
          <h5 className="message-sender">{sender}</h5>
          <div className="message-likes__container">
            {likes > 0 && <p>{likes}</p>} 
            <BiLike className="like-icon" />
          </div>
        </div>
        <div className="message-body__container">
          <p className="message-content">{content}</p>
        </div>
        <p className="message-time">{time}</p>
      </div>
    </div>
  );
};

export default MessageItem;
