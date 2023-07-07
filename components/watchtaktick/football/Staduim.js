import Image from "next/image";
import React, { useState } from "react";
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
    <div className={classes["container"]}>
      <div className={classes["alternative-players"]}>
        {[1, 2, 3, 4, 5, 6].map((player) => (
          <div key={player} className={classes["alternative-player"]}>
            <Image
              src="/svg/watch/football/player-icon-1.svg"
              alt="helmet"
              width="33"
              height="27"
            />

            <p className={classes["alternative-player-name"]}>C. Ronaldo</p>
          </div>
        ))}
      </div>
      <div className={classes["stadium"]}>
        {[
          "one",
          "two",
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
          "thirteen",
          "fourteen",
          "fivteen",
          "sixteen",
          "seventeen",
          "eighteen",
          "nineteen",
          "twenty",
          "twenty-one",
          "twenty-two",
        ].map((item, index) => (
          <div key={index} className={classes[item]}>
            {index < 11 ? (
              <Image
                className={classes["team-shirt"]}
                src="/svg/watch/football/player-icon-1.svg"
                alt="team-shirt"
                width="41"
                height="30"
              />
            ) : (
              <Image
                className={classes["team-shirt"]}
                src="/svg/watch/football/player-icon-2.svg"
                alt="team-shirt"
                width="41"
                height="30"
              />
            )}
            <p className={classes["player-name"]}>Lorem</p>
          </div>
        ))}
      </div>

      <div className={classes["alternative-players"]}>
        {[7, 8, 9, 10, 11, 12].map((player) => (
          <div key={player} className={classes["alternative-player"]}>
            <Image
              src="/svg/watch/football/player-icon-1.svg"
              alt="helmet"
              width="33"
              height="27"
            />

            <p className={classes["alternative-player-name"]}>C. Ronaldo</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staduim;
