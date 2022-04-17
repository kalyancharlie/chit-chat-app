import React, { useState, useEffect } from "react";
import SearchNewUserItem from "./SearchNewUserItem";
import { searchUsers } from "../../api/AdminAPI";
import useAppContext from "../../hooks/useAppContext";
import { getChatIdsFromChats, getMatchingUsers } from "../../utils/util";

const SearchNewUsersList = ({ searchUserText, setSearchUserText }) => {
  const {user, chats} = useAppContext()
  const [searchUsersList, setSearchUsersList] = useState([]);
  const [selectedUserFromSearch, setSelectedUserFromSearch] = useState('');
  // Fetch Users by Text
  const fetchUsersByText = async () => {
    try {
      const resp = await searchUsers(searchUserText);
      const { users } = resp.data;
      const existingUserIds = getChatIdsFromChats(chats)
      const filteredUsers = getMatchingUsers(users, [user?._id, ...existingUserIds])
      setSearchUsersList(() => filteredUsers);
    } catch (error) {
      console.log("error in searching suers", error);
    }
  };

  useEffect(() => {
    if (!searchUserText) return;
    const timerId = setTimeout(() => {
      fetchUsersByText();
    }, 1000);
    return () => clearTimeout(timerId);
  }, [searchUserText]);

  return (
    <div className="chat-list__container">
      {searchUsersList.filter(usr => usr?._id !== user._id).map((user) => {
        const { firstName, lastName, emailId, _id } = user;
        return (
          <SearchNewUserItem
            key={_id}
            _id={_id}
            firstName={firstName}
            lastName={lastName}
            emailId={emailId}
            userObj={user}
            setSelectedUserFromSearch={setSelectedUserFromSearch}
            selectedUserFromSearch={selectedUserFromSearch}
            setSearchUserText={setSearchUserText}
          />
        );
      })}
    </div>
  );
};

export default SearchNewUsersList;
