"use client";
import React, { useState } from "react";
import classes from "./title.module.css";
const Title = () => {
  const [title, setTitle] = useState(
    "Enter the giveaway for a chance to win ..."
  );
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}> Title</h2>
      <div className={classes["form-input"]}>
        <input
          type="text"
          className={classes["input"]}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Title;
