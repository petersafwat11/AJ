"use client";
import React, { useState } from "react";
import classes from "./streamLinks.module.css";
const StreamLinks = () => {
  const [search, setSearch] = useState("1");
  const [selectedOption, setSelectedOption] = useState("1");
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Stream Link</h2>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text "
        placeholder="Search for channel..."
        className={classes["input"]}
      />
      {search.length > 0 && (
        <div className={classes["search-options"]}>
          {[1, 2, 3, 4].map((i, index) => (
            <p
              style={{
                background: index % 2 === 0 ? "inherit" : "#F5F5F5",
              }}
              key={index}
              className={classes[selectedOption == i ?"option": 'selected-option']}
            >
              BT Sport 1
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default StreamLinks;
