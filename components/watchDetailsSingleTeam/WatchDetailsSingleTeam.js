import React from "react";
import LiveBtn from "../match/LiveBtn";
import classes from "./watchDetailsSingleTeam.module.css";
const WatchDetailsSingleTeam = ({ width, imageScr, date, place }) => {
  return (
    <div className={classes["watch-details"]}>
      <div className={classes["watch-details-first"]}>
        <img
          crossOrigin="anonymous"
          className={classes["sport-image-first"]}
          src={imageScr}
          alt="other"
          width={width}
          // height={imagesDimentions.lieageImageHeigth}
        />
        <div className={classes["date-and-place"]}>
          <p className={classes["date"]}>{date}</p>
          <p className={classes["place"]}>{place}</p>
        </div>
      </div>
      <h3 className={classes["team-title"]}>Grand Prix: Islamabad</h3>
      <div className={classes["watch-details-last"]}>
        {/* {true ? (
          <div className={classes["not-live"]}>LIVE</div>
        ) : ( */}
          <LiveBtn text={"LIVE"} />
        {/* )} */}
      </div>
    </div>
  );
};

export default WatchDetailsSingleTeam;
