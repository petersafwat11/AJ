import Image from "next/image";
import React from "react";
import classes from "./match.module.css";
export const Match = () => {
  return (
    <div className={classes["match"]}>
      <div className={classes["match-first"]}>
        <p className="date">Aug 18 - 15:00</p>
        <div className={classes["status-mobile"]}>2nd Half: 47’</div>
        <p className={classes["leage"]}>Premeir League</p>
      </div>
      <div className={classes["match-second"]}>
        <div className={classes["match-details"]}>
          <p className="date">Aug 18 - 15:00</p>
          <p className={classes["leage"]}>Premeir League</p>
        </div>
        <div className="live-button-div">
          <div className={classes["live-button"]}>
            <span></span>
            <p>Live</p>
          </div>
        </div>
        <div className={classes["first-team"]}>
          <Image
            className={classes["first-team-image"]}
            src="/svg/teams/man-united.svg"
            alt="nfl"
            width="37"
            height="37"
          />
          <p className={classes["first-team-name"]}>Man Utd</p>
        </div>
        <div className={classes["match-vs"]}>vs</div>
        <div className={classes["second-team"]}>
          <p className={classes["second-team-name"]}>Man Utd</p>

          <Image
            className={classes["second-team-image"]}
            src="/svg/teams/liverpool.svg"
            alt="nfl"
            width="37"
            height="37"
          />
        </div>
        <div className={classes["status"]}>2nd Half: 47’</div>
        <div className={classes["action-button"]}>
          <button className={classes["watch-button"]}>watch</button>
        </div>
      </div>
    </div>
  );
};

export default Match;
