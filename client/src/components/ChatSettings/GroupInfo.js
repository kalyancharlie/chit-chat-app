import React from "react";
import Icon from "../Icon";
import { MdDelete } from "react-icons/md";
import useAppContext from "../../hooks/useAppContext";
import { getFirstAndLastName, getUserNameFromChatObj, isGroupAdmin } from "../../utils/util";
import {removeGroup} from '../../api/ChatAPI'

const GroupInfo = () => {
  const { activeChat, setActiveChat, user, chats, setChats } = useAppContext();
  // Remove Group Handler
  const removeGroupHandler = async (e) => {
    try {
      if (e) e.preventDefault()
      const resp = await removeGroup({senderId: user?._id, chatId: activeChat?._id})
      if (resp.status) {
        console.log('before chats', chats)
        const newChats = chats.filter(chat => chat?._id !== activeChat?._id)
        setChats(() => (newChats))
        console.log('group removed succes')
        if (chats?.length > 0)
          setActiveChat(() => (chats[0]))
        console.log('after chats', chats)
      }
    } catch (error) {
      console.log("error in removing group")
    }
  }
 
  return (
    <div className="group-info__container">
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
          classNames={["icon__md"]}
        />
      ) : (
        <Icon
          firstName={getFirstAndLastName(activeChat?.chatName)[0]}
          lastName={getFirstAndLastName(activeChat?.chatName)[1]}
          classNames={["icon__md"]}
        />
      )}
      {activeChat?.isGroupChat ? (
        <h5 className="group-name">{activeChat?.chatName} {isGroupAdmin(activeChat, user?._id) && <span onClick={removeGroupHandler} ><MdDelete className="add-user-icon" style={{ marginLeft: "7px" }} /></span> } </h5>
      ) : (
        <h5 className="group-name">
          {`${
            getFirstAndLastName(
              getUserNameFromChatObj(activeChat, user?._id)
            )[0]
          } ${
            getFirstAndLastName(
              getUserNameFromChatObj(activeChat, user?._id)
            )[1]
          }`}
          
        </h5>
      )}
    </div>
  );
};

export default GroupInfo;
