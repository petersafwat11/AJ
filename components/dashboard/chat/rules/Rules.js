import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./FilteredWords.module.css";
const Rules = () => {
  const [rules, setRules] = useState([
    "Do not self promote",
    "18+ content or avatars are not permitted",
    "Do not post any private information",
    "Threatening behaviour is not allowed",
    "Do not post any links or try to disguise the links in formal language",
    "Do not promote/link any other streaming website",
    "Keep the discussion civil",
    "No spamming/excessive caps",
  ]);
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Chat Rules</h2>
        <div className={classes["actions"]}>
          <button className={classes["add"]}>Add</button>
          <button className={classes["delete"]}>Delete</button>
        </div>
        <div className={classes["forbidden-words"]}>
          {rules.map((item, index) => (
            <div key={index} className={classes["group"]}>
              <input type="checkbox" className={classes["input"]} />
              <p>
                {index + 1}. {item}
              </p>
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

export default Rules;
