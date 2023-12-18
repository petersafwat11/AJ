import React, { useState } from "react";
import Details from "../details/Details";
import MatchDots from "../matchDots/MatchDots";
import Temprature from "../temprature/Temprature";
import Staduim from "./Staduim";
import classes from "./lineups.module.css";
const Lineups = ({data}) => {
  const [option, setOption] = useState(1);
  const changeCategory = (option) => {
    setOption(option);
  };

  return (
    <div className={classes["container"]}>
      <Staduim />
      <div className={classes["temp"]}>
        <Temprature />
      </div>
      <MatchDots
        options={[1, 2]}
        selectedOption={option}
        changeOptions={changeCategory}
      />
      <div className={classes["details"]}>
        <Details
          matchDetails={[
            { left: "VENUE", right: "O2 Arena" },
            { left: "LOCATION", right: "New Delhi, India" },
            { left: "TEAM", right: "Pakistan" },
          ]}
        />
      </div>
    </div>
  );
};

export default Lineups;
