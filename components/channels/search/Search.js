import Image from "next/image";
import React from "react";
import classes from "./search.module.css";
const Search = ({ seacrhValue, handleSearch }) => {
  return (
    <div className={classes["search-wrapper"]}>
      <div className={classes["search-div"]}>
        <input
          value={seacrhValue}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className={classes["channel-search"]}
          type="text"
          placeholder="Search for channel..."
        />
        <Image
          className={classes["search-icon"]}
          src="/svg/search-icon.svg"
          alt="search"
          width="9"
          height="9"
        />
      </div>
    </div>
  );
};

export default Search;
