import React from "react";
import LiveButton from "../live-button/LiveButton";
import classes from "./watchDetailsNfl.module.css";
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
        <img
          className={classes["sport-image-first"]}
          src={lieageImage}
          alt="other"
          // width="60"
          height="73"
        />
        <div className={classes["date-and-place"]}>
          <p className={classes["date"]}>{date}</p>
          <p className={classes["place"]}>{place}</p>
        </div>
      </div>
      <div className={classes["watch-details-second"]}>
        <div className={classes["first-team"]}>
          <img
            className={classes["team-image"]}
            src={firstTeamImage}
            alt="other"
            width="132"
            // height="104"
          />
          <p className={classes["first-team-name"]}>{firstTeamName}</p>
        </div>
        <span className={classes["vs"]}>VS</span>
        <div className={classes["second-team"]}>
          <p className={classes["second-team-name"]}>{seconteamName}</p>
          <img
            className={classes["team-image"]}
            src={seconteamImage}
            alt="other"
            width="132"
          />
        </div>
      </div>
      <div className={classes["watch-details-last"]}>
        {half && <p className={classes["half"]}>{half}</p>}
        <LiveButton text={"LIVE"} />
      </div>
    </div>
  );
};

export default WatchDetails;