"use client";
import React, { useState } from "react";
import classes from "./title.module.css";
const Title = () => {
  const [title, setTitle] = useState("");
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Title</h2>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title"
        className={classes["input"]}
      />
    </div>
  );
};

export default Title;
