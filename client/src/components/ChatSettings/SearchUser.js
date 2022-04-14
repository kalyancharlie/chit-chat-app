import React from "react";
import { HiSearch } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import SearchUsersList from "./SearchUsersList";

const SearchUser = () => {
  return (
    <div className="search-user__container">
      <div className="search-user-input__container">
        <HiSearch className="search__icon" />
        <input
          type="text"
          className="search-user-input"
          placeholder="Add Members..."
        />
        <AiOutlineClose className="close-search-icon" title="Close Search" />
      </div>
      <SearchUsersList />
    </div>
  );
};

export default SearchUser;
