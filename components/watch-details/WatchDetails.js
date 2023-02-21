import React from 'react'
import classes from "./watchDetails.module.css";
import Image from 'next/image'
const WatchDetails = ({lieageImage, firstTeamImage, firstTeamName, seconteamImage, seconteamName, date, place, half}) => {
  return (
    <div className={classes["watch-details"]}>
      <div className={classes["watch-details-first"]}>
        <Image
          className={classes["sport-image"]}
          src="/svg/sports/other.svg"
          alt="other"
          width="120"
          height="51"
        />
      </div>
      <div className={classes["watch-details-second"]}>
        <div className={classes["first-team"]}>
          <p className={classes["first-team-name"]}>{firstTeamName}</p>
          <Image
            className={classes["first-team-image"]}
            src={firstTeamImage}
            alt="other"
            width="104"
            height="104"
          />
        </div>
        <span className={classes['vs']}>VS</span>
        <div className={classes['second-team']}>
          <p className={classes["second-team-name"]}>{seconteamName}</p>
          <Image
            className={classes["second-team-image"]}
            src={seconteamImage}
            alt="other"
            width="104"
            height="104"
          />
        </div>
      </div>
      <div className={classes["watch-details-last"]}></div>
    </div>
  );
}

export default WatchDetails
