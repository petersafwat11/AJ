import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./search.module.css";

const Search = ({ seacrhValue, handleSearch }) => {
  return (
    <div className={classes["search-wrapper"]}>
      <input
        value={seacrhValue}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        className={classes["search"]}
        type="text"
        placeholder="Search"
      />
      <BiSearch className={classes["search-icon"]} />
    </div>
  );
};

export default Search;
