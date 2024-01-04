import React, { useState } from "react";
import Details from "../details/Details";
import MatchDots from "../matchDots/MatchDots";
import AlternativePlayers from "./AlternativePlayers";
import classes from "./lineups.module.css";
import Staduim from "./Staduim";
const Lineups = ({ data, firstTeamName, secondTeamName }) => {
  console.log("data", data);
  const firstTeamSubstitutePlayers = data?.home?.players?.slice(7);
  const secondTeamSubstitutePlayers = data?.away?.players?.slice(7);
  const [option, setOption] = useState(1);
  const changeCategory = (option) => {
    setOption(option);
  };
  return (
    <div className={classes["container"]}>
      <Staduim
        data={data}
        firstTeamSubstitutePlayers={firstTeamSubstitutePlayers}
        secondTeamSubstitutePlayers={secondTeamSubstitutePlayers}
      />
      <div className={classes["details"]}>
        <Details matchDetails={[{ left: "VENUE", right: "O2 Arena" }]} />
      </div>
      <AlternativePlayers
        option={option}
        firstTeamName={firstTeamName}
        secondTeamName={secondTeamName}
        firstTeamSubstitutePlayers={firstTeamSubstitutePlayers}
        secondTeamSubstitutePlayers={secondTeamSubstitutePlayers}
      />
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
