import Image from "next/image";
import React, { useState } from "react";
import MatchDots from "../matchDots/MatchDots";
import classes from "./staduim.module.css";
const Staduim = () => {
  const [alternativePlayers, setAlternativePlayers] = useState({
    firstTeam: 1,
    secondTeam: 1,
  });
  const changeFirstTeamOptions = (option) => {
    setAlternativePlayers({
      firstTeam: option,
      secondTeam: alternativePlayers.secondTeam,
    });
  };
  const changeSecondTeamOptions = (option) => {
    setAlternativePlayers({
      firstTeam: alternativePlayers.firstTeam,
      secondTeam: option,
    });
  };

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["left"]}>
        <MatchDots
          vertical={true}
          options={[1, 2]}
          selectedOption={alternativePlayers.firstTeam}
          changeOptions={changeFirstTeamOptions}
        />

        <div className={classes["alternative-players"]}>
          {[1, 2, 3, 4, 5].map((player, index) => (
            <div key={index} className={classes["alternative-player"]}>
              <Image
                src="/svg/watch/hockey/blue-helmet.svg"
                alt="helmet"
                width="37"
                height="35"
              />
              <p className={classes["alternative-player-name"]}>K. Alexander</p>
            </div>
          ))}
        </div>
      </div>
      <div className={classes["stadium"]}>
        {[
          "one",
          "two",
          "three",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "ten",
          "eleven",
          "twelve",
        ].map((item, index) => (
          <div key={index} className={classes[item]}>
            {index < 7 ? (
              <Image
                className={classes["player-icon"]}
                src="/svg/watch/hockey/pink-helmet.svg"
                alt="helmet"
                width="37"
                height="35"
              />
            ) : (
              <Image
                className={classes["player-icon"]}
                src="/svg/watch/hockey/blue-helmet.svg"
                alt="helmet"
                width="37"
                height="35"
              />
            )}
            <p className={classes["player-name"]}>K. Alexander</p>
          </div>
        ))}
      </div>
      <div className={classes["right"]}>
        <div className={classes["alternative-players"]}>
          {[1, 2, 3, 4, 5].map((plater, index) => (
            <div key={index} className={classes["alternative-player"]}>
              <Image
                src="/svg/watch/hockey/pink-helmet.svg"
                alt="helmet"
                width="37"
                height="35"
              />
              <p className={classes["alternative-player-name"]}>K. Alexander</p>
            </div>
          ))}
        </div>
        <MatchDots
          vertical={true}
          options={[1, 2]}
          selectedOption={alternativePlayers.secondTeam}
          changeOptions={changeSecondTeamOptions}
        />
      </div>
    </div>
  );
};

export default Staduim;
