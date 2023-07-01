import React from "react";
import classes from "./summery.module.css";
const Summery = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["left"]}>
        <p className={classes["player-name"]}>Lorem</p>
        <p className={classes["player-name"]}>Lorem</p>
      </div>
      <div className={classes["right"]}>
        <div className={classes["header"]}>
          <p className={classes["header-item"]}>1st</p>
          <p className={classes["header-item"]}>2nd</p>
          <p className={classes["header-item"]}>3rd</p>
          <p className={classes["header-item"]}>4th</p>
          <p className={classes["header-item"]}>5th</p>
        </div>
        <span className={classes["devider"]}> </span>
        <div className={classes["body"]}>
          <div className={classes["body-item"]}>
            {[1, 2, 3, 4, 5].map((item) => (
              <p key={item} className={classes[""]}>
                1
              </p>
            ))}
          </div>
          <span className={classes["players-devider"]}></span>
          <div className={classes["body-item"]}>
            {[1, 2, 3, 4, 5].map((item) => (
              <p key={item} className={classes[""]}>
                1
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
