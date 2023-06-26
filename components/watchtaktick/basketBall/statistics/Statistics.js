import React from "react";
import LiveUpdates from "../liveUpdates/LiveUpdates";
import classes from "./statistics.module.css";
const Statistics = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["stats"]}>
        {[
          "FIELD GOALS",
          "3 POINTERS %",
          "FREE THROWS %",
          "TOTAL REBOUNDS",
          "OFFENSIVE REBOUNDS",
        ].map((item, index) => (
          <div key={index} className={classes["stats-item"]}>
            <div className={classes["item-top"]}>
              <p className={classes["first"]}>50%</p>
              <p className={classes["middle"]}>{item}</p>
              <p className={classes["last"]}>50%</p>
            </div>
            <div className={classes["progress-bar"]}>
              <span className={classes["first-team-percentage"]}></span>
            </div>
          </div>
        ))}
        {["ASSISTS", "BLOCKS", "STEALS", "TURNOVERS", "FOULS"].map(
          (item, index) => (
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
          )
        )}
      </div>
      <LiveUpdates />
    </div>
  );
};

export default Statistics;
