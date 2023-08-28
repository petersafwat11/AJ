import React from "react";
import classes from "./prizeImage.module.css";
const PrizeImage = ({ data, dispatchPrizeDetail }) => {
  const inputClick = (file, dispatchtype) => {
    console.log("file", file, dispatchtype);
    dispatchPrizeDetail({
      type: dispatchtype,
      value: file,
    });
  };
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Prize Image</h2>
      <div className={classes["input-wrapper"]}>
        <input
          onChange={(e) => {
            inputClick(e.target.files[0], "PRIZE-IMAGE");
          }}
          accept="image/*"
          className={classes["input"]}
          type="file"
          hidden
        />
        <span
          onClick={(e) => {
            e.target.previousElementSibling.click();
          }}
          className={classes["upload"]}
        >
          Upload
        </span>
        {data && <span className={classes["image-name"]}>{data}</span>}
      </div>
    </div>
  );
};

export default PrizeImage;
