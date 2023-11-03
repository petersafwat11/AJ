import React, { useState } from "react";
import MatchDots from "../matchDots/MatchDots";
import AlternativePlayers from "./AlternativePlayers";
import Staduim from "./Staduim";
import classes from "./lineups.module.css";
import Plan from "./lineups/plan/Plan";
const Lineups = () => {
  const [option, setOption] = useState(1);
  const changeCategory = (option) => {
    setOption(option);
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["stad"]}>
        <Plan top={true} />
        <span className={classes["devider"]}></span>
        <Staduim />
        <span className={classes["devider"]}></span>

        <Plan />
      </div>
      <div className={classes["alternative-players"]}>
        <AlternativePlayers />
      </div>
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
