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
      ].map((item, index) => (
        <div key={index} className={classes[item]}>
          {index < 8 ? (
            <Image
              src="/svg/watch/handball/red-player.svg"
              alt="helmet"
              width="37"
              height="35"
            />
          ) : (
            <Image
              src="/svg/watch/handball/yellow-player.svg"
              alt="helmet"
              width="37"
              height="35"
            />
          )}
          <p className={classes["player-name"]}>K. Alexander</p>
        </div>
      ))}
    </div>
  );
};

export default Staduim;
