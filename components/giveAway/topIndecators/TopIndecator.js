import React from "react";
import classes from "./topIndecator.module.css";
function generateArray(num) {
  return Array.from(Array(num), (_, index) => index + 1);
}

const TopIndecator = ({ indicatorsNum, curState }) => {
  return (
    <div className={classes["container"]}>
      {generateArray(indicatorsNum).map((item) => (
        <span
          key={item * Math.random()}
          className={
            classes[item === curState ? "indicator" : "cur-state-indicator"]
          }
        ></span>
      ))}
    </div>
  );
};

export default TopIndecator;
