import React from "react";
import classes from "./description.module.css";
const Description = () => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Description</h2>
      <textarea className={classes["text-area"]} />
    </div>
  );
};

export default Description;
