import React from "react";
import classes from "./fixtureAndResults.module.css";
import Matches from "./matches/Matches";
import Top from "./top/Top";
const FixtureAndResults = ({ type }) => {
  return (
    <div className={classes["fixure"]}>
      <Top />
      <Matches type={type} />
    </div>
  );
};

export default FixtureAndResults;
