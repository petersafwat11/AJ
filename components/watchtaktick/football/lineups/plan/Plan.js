import React from "react";
import classes from "./plan.module.css";
const Plan = ({top}) => {
  return (
    <div className={ top ? classes["container-top"]:classes["container-bottom"]}>
      <p className={classes["text"]}>5-4-2</p>
    </div>
  );
};

export default Plan;
