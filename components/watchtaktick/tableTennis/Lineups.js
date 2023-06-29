import React from "react";
import Details from "../details/Details";
import Temprature from "../temprature/Temprature";
import Staduim from "./Staduim";
import classes from "./lineups.module.css";
const Lineups = () => {
  return (
    <div className={classes["container"]}>
      <Staduim />
      <div className={classes["temp"]}>
        <Temprature />
      </div>

      <Details
        matchDetails={[
          { left: "VENUE", right: "O2 Arena" },
          { left: "LOCATION", right: "New Delhi, India" },
          { left: "TEAM", right: "Pakistan" },
        ]}
      />
    </div>
  );
};

export default Lineups;
