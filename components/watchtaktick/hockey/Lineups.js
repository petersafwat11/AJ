import React, { useState } from "react";
import MatchDots from "../matchDots/MatchDots";
import AlternativePlayers from "./AlternativePlayers";
import classes from "./lineups.module.css";
import Staduim from "./Staduim";
const Lineups = ({ data, firstTeamName, secondTeamName }) => {
  const changeCategory = (option) => {
    setOption(option);
  };
  const [option, setOption] = useState(1);
  const firstTeamAlternativePlayers = data?.home?.players?.slice(6);
  const secondTeamAlternativePlayers = data?.away?.players?.slice(6);
  // console.log("lineups", data);
  return (
    <div className={classes["container"]}>
      <Staduim data={data} />
      <div className={classes["alternative-players"]}>
        <AlternativePlayers
          firstTeamAlternativePlayers={firstTeamAlternativePlayers}
          secondTeamSubstitutePlayers={secondTeamAlternativePlayers}
          option={option}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
        />
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
