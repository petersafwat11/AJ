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
  );
};

export default Staduim;
