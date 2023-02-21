import React from 'react'
import classes from './WhoWillWin.mobile.css'
import Image from "next/image";

const WhoWillWin = () => {
  return (
    <div className={classes["who-will-win"]}>
      <h4>Who will win? </h4>
      <div className={classes["first-team"]}>
        <Image
          className={classes["team-image"]}
          src="/svg/teams/man-united.svg"
          alt="nfl"
          width="31"
          height="31"
        />
        <span className={classes["first-team-percentage"]}></span>
        <p className={classes["first-team-para"]}>73%</p>
      </div>
      <div className={classes["second-team"]}>
        <Image
          className={classes["team-image"]}
          src="/svg/teams/liverpool.svg"
          alt="liverpool"
          width="31"
          height="31"
        />
        <span className={classes["second-team-percentage"]}>
            <span></span>
        </span>
        <p className={classes["second-team-para"]}>27%</p>
      </div>
    </div>
  );
}

export default WhoWillWin
