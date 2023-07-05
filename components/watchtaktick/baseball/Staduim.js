import Image from "next/image";
import React from "react";
import classes from "./staduim.module.css";

const Staduim = () => {
  return (
    <div className={classes["stadium"]}>
      {["one", "two", "three", "four", "five", "six", "seven"].map(
        (item, index) => (
          <div key={item} className={classes[item]}>
            <Image
            className={classes['player-icon']}
              src="/svg/watch/baseball/player.svg"
              alt="player-icon"
              width="41"
              height="45"
            />
            <p className={classes["player-name"]}>Lorem </p>
          </div>
        )
      )}
    </div>
  );
};

export default Staduim;
