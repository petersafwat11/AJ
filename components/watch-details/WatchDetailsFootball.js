"use client";
import React, { useCallback, useEffect, useState } from "react";

import LiveBtn from "../live-button/LiveButton";
import classes from "./watchDetails.module.css";
const WatchDetails = ({
  lieageImage,
  lieageImageDimetions,
  firstTeamImage,
  firstTeamImageDimentions,
  firstTeamName,
  seconteamImage,
  secondTeamImageDimentions,
  seconteamName,
  date,
  place,
  half,
  live,
}) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: "",
    height: "",
  });
  const [imagesDimentions, setImagesDimentions] = useState({
    lieageImageWidth: lieageImageDimetions.width.tablet,
    lieageImageHeigth: lieageImageDimetions.height.tablet,
    firstTeamImageWidth: firstTeamImageDimentions.width.tablet,
    firstTeamImageHeight: firstTeamImageDimentions.height.tablet,
    seconteamImageWidth: secondTeamImageDimentions.width.tablet,
    seconteamImageHeight: secondTeamImageDimentions.height.tablet,
  });
  const handleResize = useCallback(() => {
    setWindowDimensions({
      width: window.screen.width,
      height: window.screen.height,
    });
    if (window.screen.width < 600) {
      setImagesDimentions({
        lieageImageWidth: lieageImageDimetions.width.mobile,
        lieageImageHeigth: lieageImageDimetions.height.mobile,
        firstTeamImageWidth: firstTeamImageDimentions.width.mobile,
        firstTeamImageHeight: firstTeamImageDimentions.height.mobile,
        seconteamImageWidth: secondTeamImageDimentions.width.mobile,
        seconteamImageHeight: secondTeamImageDimentions.height.mobile,
      });
      return;
    }
    if (window.screen.width < 900) {
      setImagesDimentions({
        lieageImageWidth: lieageImageDimetions.width.tablet,
        lieageImageHeigth: lieageImageDimetions.height.tablet,
        firstTeamImageWidth: firstTeamImageDimentions.width.tablet,
        firstTeamImageHeight: firstTeamImageDimentions.height.tablet,
        seconteamImageWidth: secondTeamImageDimentions.width.tablet,
        seconteamImageHeight: secondTeamImageDimentions.height.tablet,
      });
      return;
    }
    if (window.screen.width > 900) {
      setImagesDimentions({
        lieageImageWidth: lieageImageDimetions.width.desktop,
        lieageImageHeigth: lieageImageDimetions.height.desktop,
        firstTeamImageWidth: firstTeamImageDimentions.width.desktop,
        firstTeamImageHeight: firstTeamImageDimentions.height.desktop,
        seconteamImageWidth: secondTeamImageDimentions.width.desktop,
        seconteamImageHeight: secondTeamImageDimentions.height.desktop,
      });
      return;
    }
  }, [
    lieageImageDimetions.width.mobile,
    lieageImageDimetions.height.mobile,
    firstTeamImageDimentions.width.mobile,
    firstTeamImageDimentions.height.mobile,
    secondTeamImageDimentions.width.mobile,
    secondTeamImageDimentions.height.mobile,
    lieageImageDimetions.width.tablet,
    lieageImageDimetions.height.tablet,
    firstTeamImageDimentions.width.tablet,
    firstTeamImageDimentions.height.tablet,
    secondTeamImageDimentions.width.tablet,
    secondTeamImageDimentions.height.tablet,
    lieageImageDimetions.width.desktop,
    lieageImageDimetions.height.desktop,
    firstTeamImageDimentions.width.desktop,
    firstTeamImageDimentions.height.desktop,
    secondTeamImageDimentions.width.desktop,
    secondTeamImageDimentions.height.desktop,
  ]);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className={classes["watch-details"]}>
      <div className={classes["watch-details-first"]}>
        <img
          crossOrigin="anonymous"
          className={classes["sport-image-first"]}
          src={lieageImage}
          alt="other"
          width={imagesDimentions.lieageImageWidth}
          // height={imagesDimentions.lieageImageHeigth}
        />
        <div className={classes["date-and-place"]}>
          <p className={classes["date"]}>{date}</p>
          <p className={classes["place"]}>{place}</p>
        </div>
      </div>
      <div className={classes["watch-details-second"]}>
        <div className={classes["first-team"]}>
          <img
            crossOrigin="anonymous"
            className={classes["team-image"]}
            src={firstTeamImage}
            alt="other"
            // height={imagesDimentions.firstTeamImageHeight}
            width={imagesDimentions.firstTeamImageWidth}
          />
          <p className={classes["first-team-name"]}>{firstTeamName}</p>
        </div>
        <span className={classes["vs"]}>VS</span>
        <div className={classes["second-team"]}>
          <p className={classes["second-team-name"]}>{seconteamName}</p>
          <img
            crossOrigin="anonymous"
            className={classes["team-image"]}
            src={seconteamImage}
            alt="other"
            // height={imagesDimentions.seconteamImageHeight}
            width={imagesDimentions.seconteamImageWidth}
          />
        </div>
      </div>
      <div className={classes["watch-details-last"]}>
        {/* <p className={classes["half"]}>{half}</p> */}
        {/* {true ? ( */}
        {/* <div className={classes["not-live"]}>LIVE</div> */}
        {live && <LiveBtn text={"LIVE"} />}

        {/* ) : (
          <LiveButton text={"LIVE"} />
        )} */}
      </div>
    </div>
  );
};

export default WatchDetails;
