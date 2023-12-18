import React from "react";
import { FaTshirt } from "react-icons/fa";

import classes from "./playersLocations.module.css";

const PlayersLocations5212 = () => {
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
          <FaTshirt className={classes["team-shirt"]} />
          <p className={classes["player-name"]}>Lorem</p>
        </div>
      ))}
    </>
  );
};

export default PlayersLocations5212;
