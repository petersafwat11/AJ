import React, { useState } from "react";
import MatchDots from "../matchDots/MatchDots";
import AlternativePlayers from "./AlternativePlayers";
import classes from "./lineups.module.css";
import Plan from "./lineups/plan/Plan";
import Staduim from "./Staduim";
const Lineups = ({ data, firstTeamName, secondTeamName }) => {
  const [option, setOption] = useState(1);
  const changeCategory = (option) => {
    setOption(option);
  };
  console.log("lineupsDatalineupsData", data);
  const firstTeamSubstitutePlayers = data[0]?.substitutes;
  const secondTeamSubstitutePlayers = data[1]?.substitutes;
  return (
    <div className={classes["container"]}>
      <div className={classes["stad"]}>
        <Plan top={true} plan={data[0]?.formation} />
        <span className={classes["devider"]}></span>
        <Staduim data={data} />
        <span className={classes["devider"]}></span>

        <Plan plan={data[1]?.formation} />
      </div>
      <div className={classes["alternative-players"]}>
        <AlternativePlayers
          firstTeamSubstitutePlayers={firstTeamSubstitutePlayers}
          secondTeamSubstitutePlayers={secondTeamSubstitutePlayers}
          option={option}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
        />
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
