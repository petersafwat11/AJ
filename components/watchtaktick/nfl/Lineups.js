import React, { useState } from "react";
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
      <div className={classes["alternative-players"]}>
        <AlternativePlayers />
      </div>
      <MatchDots
        options={[1, 2]}
        selectedOption={option}
        changeOptions={changeCategory}
      />
    </div>
  );
};

export default Lineups;
