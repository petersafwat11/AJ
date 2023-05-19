"use client";
import React, { useState } from "react";
import classes from "./description.module.css";
const Description = () => {
  const [description, setDescription] = useState(
    "Enter the giveaway for a chance to win ..."
  );
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}> Description</h2>
      <div className={classes["input-group"]}>
        <label className={classes["label"]} htmlFor="description">
          mESSAGE
        </label>
        <input
          type="text"
          id="description"
          className={classes["input"]}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Description;
