import React from "react";
import Body from "./Body";
import Bottom from "./Bottom";
import classes from "./statistics.module.css";
import Top from "./Top";
const Statistics = ({ optionsOne, data, firstTeamName, secondTeamName }) => {
  return (
    <div className={classes["container"]}>
      <Top firstTeamName={firstTeamName} secondTeamName={secondTeamName} />
      <span className={classes["devider"]}></span>
      <div className={classes["body"]}>
        <Body options={optionsOne} data={data} />
      </div>
      <span className={classes["devider"]}></span>

      <Bottom />
    </div>
  );
};

export default Statistics;
