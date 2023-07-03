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
              className={classes["team-shirt"]}
              src="/svg/watch/netball/red-player.svg"
              alt="helmet"
              width="37"
              height="35"
            />
          ) : (
            <Image
              className={classes["team-shirt"]}
              src="/svg/watch/netball/blue-player.svg"
              alt="helmet"
              width="37"
              height="35"
            />
          )}
          <p className={classes["player-name"]}>Lorem</p>
        </div>
      ))}
    </div>
  );
};

export default Staduim;
