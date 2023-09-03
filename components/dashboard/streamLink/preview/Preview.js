import React from "react";
import VideoJs from "../../../video/VideoJs";
import classes from "./preview.module.css";
const Preview = ({ url }) => {
  console.log(url);
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Preview</h2>
      {!url ? (
        <div className={classes["preview"]}></div>
      ) : (
        <VideoJs url={url} />
      )}
    </div>
  );
};

export default Preview;
