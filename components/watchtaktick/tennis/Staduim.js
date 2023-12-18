import Image from "next/image";
import React from "react";
import classes from "./staduim.module.css";

const Staduim = ({ firstPlayer, secondPlayer }) => {
  return (
    <div className={classes["stadium"]}>
      <div className={classes["palyer-1"]}>
        <Image
          className={classes["player-icon"]}
          src="/svg/watch/tennis/player-1.svg"
          alt="tennis-racket"
          width="46"
          height="69"
        />
        <p className={classes["player-name"]}>{firstPlayer} </p>
      </div>
      <div className={classes["palyer-2"]}>
        <Image
          className={classes["player-icon"]}
          src="/svg/watch/tennis/player-2.svg"
          alt="tennis-racket"
          width="46"
          height="69"
        />
        <p className={classes["player-name"]}>{secondPlayer} </p>
      </div>
    </div>
  );
};

export default Staduim;
