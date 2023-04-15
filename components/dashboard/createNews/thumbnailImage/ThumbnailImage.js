import React from "react";
import classes from "./thumbnailImage.module.css";
const ThumbnailImage = () => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Thumbnail Image</h2>
      <input type="file" className={classes["input"]} hidden />
      <span className={classes['upload']}>Upload</span>
    </div>
  );
};

export default ThumbnailImage;
