import Image from "next/image";
import React from "react";
import classes from "./staduim.module.css";

const Staduim = () => {
  return (
    <div className={classes["stadium"]}>
      {["one", "two", "three", "four", "five", "six", "seven", "eight"].map(
        (item, index) =>
          index < 4 ? (
            <div key={item} className={classes[item]}>
              <Image
                src="/svg/watch/vollayball/red-player.svg"
                alt="player-icon"
                width="44"
                height="65"
              />
              <p className={classes["player-name"]}>Lorem </p>
            </div>
          ) : (
            <div key={item} className={classes[item]}>
              <Image
                src="/svg/watch/vollayball/blue-player.svg"
                alt="player-icon"
                width="44"
                height="65"
              />
              <p className={classes["player-name"]}>Lorem </p>
            </div>
          )
      )}
    </div>
  );
};

export default Staduim;
