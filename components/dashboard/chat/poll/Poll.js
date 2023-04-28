import React from "react";
import classes from "./poll.module.css";
const Poll = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Poll</h2>
        <div className={classes["actions"]}>
          <button className={classes["add"]}>Add</button>
          <button className={classes["delete"]}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Poll;
