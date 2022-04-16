import React from "react";
import { HiSearch } from "react-icons/hi";

const Search = ({setInputValue, textValue}) => {
  return (
    <div className="search__container">
      <HiSearch className="search__icon" />
      <input type="text" placeholder="Search.." className="search" value={textValue} onChange={(e) => {
        e.preventDefault();
        setInputValue(() => (e.target.value))
      }} />
    </div>
  );
};

export default Search;
