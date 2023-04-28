import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./FilteredWords.module.css";
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
        <div className={classes["forbidden-words"]}>
          {forbiddenWords.map((item, index) => (
            <div key={index} className={classes["group"]}>
              <input type="checkbox" className={classes["input"]} />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div className={classes["paginations"]}>
          <p>Page 1 of 9</p>
          <div className={classes["arrows"]}>
            <IoIosArrowBack /> <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredWords;
