import React, { useState } from "react";
import Details from "../details/Details";
import MatchDots from "../matchDots/MatchDots";
import AlternativePlayers from "./AlternativePlayers";
import Staduim from "./Staduim";
import classes from "./lineups.module.css";
const Lineups = () => {
  const [option, setOption] = useState(1);
  const changeCategory = (option) => {
    setOption(option);
  };

  return (
    <div className={classes["container"]}>
      <Staduim />
      <div className={classes["details"]}>
        <Details matchDetails={[{ left: "VENUE", right: "O2 Arena" }]} />
      </div>
      <AlternativePlayers />
      <div className={classes["match-details-option-controller"]}>
        <MatchDots
          options={[1, 2]}
          selectedOption={option}
          changeOptions={changeCategory}
        />
      </div>
    </div>
  );
};

export default Lineups;
