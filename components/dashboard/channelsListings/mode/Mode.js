import React from "react";
import classes from "./mode.module.css";
const Mode = () => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Mode</h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <input type="checkbox" />
          <p>Visible</p>
        </div>
        <div className={classes["input-group"]}>
          <input type="checkbox" />
          <p>Hidden</p>
        </div>
      </div>
    </div>
  );
};

export default Mode;
