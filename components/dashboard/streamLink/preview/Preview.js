import React from "react";
import HlcPlayer from "../../../hlcPlayer/HlcPlayer";
import classes from "./preview.module.css";
const Preview = ({ url }) => {
  console.log(url);
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Preview</h2>
      {!url ? (
        <div className={classes["preview"]}></div>
      ) : (
        <HlcPlayer url={url} />
      )}
    </div>
  );
};

export default Preview;
