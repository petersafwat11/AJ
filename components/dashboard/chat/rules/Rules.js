"use client";
import React, { useState } from "react";
import classes from "./rules.module.css";
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
      </div>
      <div className={classes["rules"]}>
        {rules.map((item, index) => (
          <div key={index} className={classes["rule"]}>
            <div>
              <input type="checkbox" className={classes["input"]} />
            </div>
            <p className={classes["rule-para"]}>
              <span className={classes["num"]}>{index + 1}.</span> {item}
            </p>
          </div>
        ))}
      </div>
      {/* <PAginations /> */}
    </div>
  );
};

export default Rules;
