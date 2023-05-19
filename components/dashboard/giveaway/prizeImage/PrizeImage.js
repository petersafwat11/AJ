import React from "react";
import classes from "./prizeImage.module.css";
const PrizeImage = () => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Prize Image</h2>
      <div>
        <span className={classes["upload"]}>Upload</span>
        <input className={classes["input"]} type="file" hidden />
      </div>
    </div>
  );
};

export default PrizeImage;
