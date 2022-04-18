import React, { useEffect } from "react";
import Icon from "../Icon";
import useAppContext from "../../hooks/useAppContext";
import {createOrAccessChat} from '../../api/ChatAPI'
import SearchChatInfo from "./SearchChatInfo";

const SearchNewUserItem = ({
  firstName = "",
  lastName = "",
  emailId = "",
  _id,
  userObj,
  isUserClicked,
  setSelectedUserFromSearch,
  selectedUserFromSearch,
  setSearchUserText
}) => {
  const { user, setChats, chats } = useAppContext();
  // Add User to Chat List
  const createChatWithUser = async (e) => {
    if (e) e.preventDefault();
    setSelectedUserFromSearch(() => (_id));
    // Create Chat API call
    const data = await createOrAccessChat({senderId: user?._id, targetUserId: _id})
    if (data.status && data.chatData) {
      setChats(prev => ([...prev, data.chatData]))
    }
    setSearchUserText(() => (''))
    // console.log("chat created", data);
  };

  return (
    <div
      className={`${
        selectedUserFromSearch && selectedUserFromSearch === _id
          ? "chat-item__container active-chat"
          : "chat-item__container"
      }`}
      onClick={createChatWithUser}
    >
      <Icon
        firstName={firstName}
        lastName={lastName}
        classNames={["icon__sm"]}
      />
      <SearchChatInfo chatName={`${firstName} ${lastName}`} latestMessage={emailId} />
    </div>
  );
};

export default SearchNewUserItem;
