import React from "react";
import Body from "./Body";
import Top from "./Top";
import Bottom from "./Bottom";
import classes from "./statistics.module.css";
const Statistics = ({ optionsOne, optionsTwo }) => {
  return (
    <div className={classes["container"]}>
      <Top />
      <span className={classes["devider"]}></span>
      <div className={classes["body"]}>
        <Body optionsOne={optionsOne} optionsTwo={optionsTwo} />
      </div>
      <span className={classes["devider"]}></span>

      <Bottom />
    </div>
  );
};

export default Statistics;
