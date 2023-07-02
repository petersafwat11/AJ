import React from "react";
import Details from "../details/Details";
import Staduim from "./Staduim";
import classes from "./lineups.module.css";
const Lineups = () => {
  return (
    <div className={classes["container"]}>
      <Staduim />
      <div className={classes["details"]}>
        <Details matchDetails={[{ left: "VENUE", right: "O2 Arena" }]} />
      </div>
    </div>
  );
};

export default Lineups;
