import Image from "next/image";
import React from "react";
import classes from "./playersLocations.module.css";

const PlayersLocations451 = () => {
  return (
    <>
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
    </>
  );
};

export default PlayersLocations451;
