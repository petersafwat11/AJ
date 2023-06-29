import Image from "next/image";
import React from "react";
import classes from "./staduim.module.css";

const Staduim = () => {
  return (
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
      ].map((item) => (
        <div key={item} className={classes[item]}>
          <Image
            src="/svg/watch/cricket/player.svg"
            alt="player-icon"
            width="45"
            height="53"
          />
          <p className={classes["player-name"]}>Lorem </p>
        </div>
      ))}
    </div>
  );
};

export default Staduim;
