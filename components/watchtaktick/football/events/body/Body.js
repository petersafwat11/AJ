import Image from "next/image";
import React from "react";
import classes from "./body.module.css";
const Body = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <div className={classes["left"]}>
          <Image
            className={classes["arrow-up"]}
            src="/svg/watch/football/icon-left.svg"
            alt="stadium"
            width="21"
            height="29"
          />

          <p>Howard Webb</p>
        </div>
        <div className={classes["right"]}>
          <Image
            className={classes["arrow-up"]}
            src="/svg/watch/football/icon-right.svg"
            alt=" "
            width="28"
            height="21"
          />

          <p>Stamford Bridge</p>
        </div>
      </div>
      <div className={classes["content"]}>
        <Image
          className={classes["watch-icon"]}
          src="/svg/watch/football/stopwatch.svg"
          alt="watch"
          width="33"
          height="30"
        />
        <span className={classes["devider"]}></span>
        <Image
          className={classes["whistle-icon"]}
          src="/svg/watch/football/whistle.svg"
          alt="whistle"
          width="32"
          height="32"
        />
      </div>
    </div>
  );
};

export default Body;
