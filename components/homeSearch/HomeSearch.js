"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import classes from "./homesearch.module.css";
const HomeSearch = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={classes["search-div"]}>
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className={classes["search"]}
        type="text"
        placeholder="Search for event..."
      />
      <GoSearch className={classes["search-icon"]} />
    </div>
  );
};

export default HomeSearch;
