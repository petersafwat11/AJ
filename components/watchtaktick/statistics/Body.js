import React from "react";
import classes from "./body.module.css";
const Body = ({ optionsOne, optionsTwo }) => {
  return (
    <div className={classes["stats"]}>
      {optionsOne.map((item, index) => (
        <div key={index} className={classes["stats-item"]}>
          <div className={classes["item-top"]}>
            <p className={classes["first"]}>50%</p>
            <p className={classes["middle"]}>{item}</p>
            <p className={classes["last"]}>50%</p>
          </div>
          <div className={classes["progress-bar"]}>
            <div className={classes["progress-bar-first"]}>
              <span ></span>
            </div>
            <div className={classes["progress-bar-last"]}>
              <span ></span>
            </div>
          </div>
        </div>
      ))}
      {/* {optionsTwo.map((item, index) => (
        <div key={index} className={classes["stats-item-zero-state"]}>
          <div className={classes["item-top"]}>
            <p className={classes["first"]}>0</p>
            <p className={classes["middle"]}>{item}</p>
            <p className={classes["last"]}>0</p>
          </div>
          <div className={classes["progress-bar-zero"]}>
            <span className={classes["first-team-percentage"]}></span>
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default Body;
