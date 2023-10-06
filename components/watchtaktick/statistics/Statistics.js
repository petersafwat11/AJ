import React from "react";
import Body from "./Body";
import Top from "./Top";
import Bottom from "./bottom";
import classes from "./statistics.module.css";
const Statistics = ({ optionsOne, optionsTwo }) => {
  return (
    <div className={classes["container"]}>
      <Top />
      <span className={classes["devider"]}></span>
      <div className={classes["body"]}>
        {/* <div className={classes["stats"]}>
          {optionsOne.map((item, index) => (
            <div key={index} className={classes["stats-item"]}>
              <div className={classes["item-top"]}>
                <p className={classes["first"]}>50%</p>
                <p className={classes["middle"]}>{item}</p>
                <p className={classes["last"]}>50%</p>
              </div>
              <div className={classes["progress-bar"]}>
                <span className={classes["progress-bar-first"]}></span>
                <span className={classes["progress-bar-last"]}></span>
              </div>
            </div>
          ))}
          {optionsTwo.map((item, index) => (
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
          ))}
        </div> */}
        <Body optionsOne={optionsOne} optionsTwo={optionsTwo} />
      </div>
      <span className={classes["devider"]}></span>

      <Bottom />
    </div>
  );
};

export default Statistics;
