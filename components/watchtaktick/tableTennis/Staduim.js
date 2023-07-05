import Image from "next/image";
import React from "react";
import classes from "./staduim.module.css";

const Staduim = () => {
  return (
    <div className={classes["stadium"]}>
      <div className={classes["palyer-1"]}>
        <Image
          className={classes["player-icon"]}
          src="/svg/watch/table-tennis/tennis-racket.svg"
          alt="tennis-racket"
          width="63"
          height="63"
        />
        <p className={classes["player-name"]}>Lorem </p>
      </div>
      <div className={classes["palyer-2"]}>
        <Image
          className={classes["player-icon"]}
          src="/svg/watch/table-tennis/tennis-racket.svg"
          alt="tennis-racket"
          width="63"
          height="63"
        />
        <p className={classes["player-name"]}>Lorem </p>
      </div>
    </div>
  );
};

export default Staduim;
