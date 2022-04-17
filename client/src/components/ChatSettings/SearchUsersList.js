import React, { useEffect, useState } from "react";
import { searchUsers } from "../../api/AdminAPI";
import { getMatchingUsers } from "../../utils/util";
import SearchUserItem from "./SearchUserItem";

const SearchUsersList = ({searchUserText, groupMembers, setGroupMembers}) => {
  const [searchUsersList, setSearchUsersList] = useState([])
  // Fetch Users by Text
  const fetchUsersByText = async () => {
    try {
      const resp = await searchUsers(searchUserText);
      const { users } = resp.data;
      console.log("memebrs list", groupMembers)
      const existingUserIds = groupMembers?.map(member => member?._id)
      console.log("existin ids", existingUserIds)
      const filteredUsers = getMatchingUsers(users, [...existingUserIds])
      console.log("filtered ids", filteredUsers)
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
    <>
      <p className="section-name group-section">Search Results</p>
      <div className="search-user-results__container">
        {searchUsersList?.map(usr => {
        return <SearchUserItem key={usr?._id} {...usr} groupMembers={groupMembers} setGroupMembers={setGroupMembers}  />
        })}
      </div>
    </>
  );
};

export default SearchUsersList;
