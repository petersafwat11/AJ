import Image from "next/image";
import React from "react";
import LiveButton from "../live-button/LiveButton";
import classes from "./watchDetails.module.css";
const WatchDetails = ({
  lieageImage,
  firstTeamImage,
  firstTeamName,
  seconteamImage,
  seconteamName,
  date,
  place,
  half,
}) => {
  return (
    <div className={classes["watch-details"]}>
      <div className={classes["watch-details-first"]}>
        <Image
          className={classes["sport-image"]}
          src={lieageImage}
          alt="other"
          width="121"
          height="51"
        />
        <div className={classes['date-and-place']}>
          <p className={classes["date"]}>{date}</p>
          <p className={classes["place"]}>{place}</p>
        </div>
      </div>
      <div className={classes["watch-details-second"]}>
        <div className={classes["first-team"]}>
          <Image
            className={classes["first-team-image"]}
            src={firstTeamImage}
            alt="other"
            width="104"
            height="104"
          />
          <p className={classes["first-team-name"]}>{firstTeamName}</p>
        </div>
        <span className={classes["vs"]}>VS</span>
        <div className={classes["second-team"]}>
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
      <div className={classes["watch-details-last"]}>
        <p className={classes["half"]}>{half}</p>
        <LiveButton text={"LIVE"} />
      </div>
    </div>
  );
};

export default WatchDetails;
