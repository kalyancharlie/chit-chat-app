import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import SearchUsersList from "./SearchUsersList";

const SearchUser = ({groupMembers, setGroupMembers}) => {
  const [searchUserText, setSearchUserText] = useState('')
  return (
    <>
      <div className="search-user__container">
        <div className="search-user-input__container">
          <HiSearch className="search__icon" />
          <input
            type="text"
            className="search-user-input"
            placeholder="Add Members..."
            value={searchUserText}
            onChange={(e) => setSearchUserText(() => (e.target.value))}
          />
          <AiOutlineClose className="close-search-icon" title="Close Search" onClick={() => setSearchUserText(() => (''))} />
        </div>
        {searchUserText && <SearchUsersList groupMembers={groupMembers} setGroupMembers={setGroupMembers} searchUserText={searchUserText} />} 
      </div>
      <hr className="hr" />
    </>
  );
};

export default SearchUser;
