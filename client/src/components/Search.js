import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = () => {
  return (
    <div className="search__container">
      <HiSearch className="search__icon" />
      <input type="text" placeholder="Search.." className="search" />
    </div>
  );
};

export default Search;
