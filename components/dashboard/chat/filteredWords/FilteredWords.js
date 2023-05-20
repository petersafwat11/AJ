"use client";
import React, { useState } from "react";
import PAginations from "../paginations/PAginations";
import classes from './filteredWords.module.css'

const FilteredWords = () => {
  const [forbiddenWords, setForbiddenWords] = useState([
    "fuck",
    "www",
    "example",
  ]);
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Filtered Words</h2>
        <div className={classes["actions"]}>
          <button className={classes["add"]}>Add</button>
          <button className={classes["delete"]}>Delete</button>
        </div>
      </div>
      <div className={classes["forbidden-words"]}>
        {forbiddenWords.map((item, index) => (
          <div key={index} className={classes["group"]}>
            <input type="checkbox" className={classes["input"]} />
            <p className={classes["forbidden-word"]}>{item}</p>
          </div>
        ))}
      </div>
      <PAginations />
    </div>
  );
};

export default FilteredWords;
