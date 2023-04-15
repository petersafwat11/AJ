import React from "react";
import classes from "./preview.module.css";
const Preview = () => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Preview</h2>
      <div className={classes["preview"]}></div>
    </div>
  );
};

export default Preview;
