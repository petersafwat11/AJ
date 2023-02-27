import Image from "next/image";
import React from "react";
import classes from "./WhoWillWin.module.css";

const WhoWillWin = () => {
  return (
    <div className={classes["who-will-win"]}>
      <h4 className={classes["heading"]}>Who will win? </h4>
      <div className={classes["first-team"]}>
        <Image
          className={classes["team-image"]}
          src="/svg/man-united.svg"
          alt="nfl"
          width="27"
          height="27"
        />
        <span className={classes["first-team-percentage"]}>
          <span></span>
        </span>
        <p className={classes["first-team-para"]}>73%</p>
      </div>
      <div className={classes["second-team"]}>
        <Image
          className={classes["team-image"]}
          src="/svg/liverpool.svg"
          alt="liverpool"
          width="27"
          height="27"
        />
        <span className={classes["second-team-percentage"]}>
          <span></span>
        </span>
        <p className={classes["second-team-para"]}>27%</p>
      </div>
    </div>
  );
};

export default WhoWillWin;
