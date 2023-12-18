import React, { useState } from "react";
import MatchDots from "../matchDots/MatchDots";
import AlternativePlayers from "./AlternativePlayers";
import classes from "./lineups.module.css";
import Staduim from "./Staduim";
const Lineups = ({ data }) => {
  const changeCategory = (option) => {
    setOption(option);
  };
  const [option, setOption] = useState(1);
  console.log("lineups", data);
  return (
    <div className={classes["container"]}>
      <Staduim />
      <div className={classes["alternative-players"]}>
        <AlternativePlayers />
      </div>
      <div className={classes["mobile-dots"]}>
        <MatchDots
          options={[3, 4]}
          selectedOption={option}
          changeOptions={changeCategory}
        />
      </div>
    </div>
  );
};

export default Lineups;
