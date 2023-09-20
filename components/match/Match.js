"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  calcRemainingTime,
  determineLive,
  convertDateHomePage
} from "../../utils/convertDateFormat";
import LiveBtn from "./LiveBtn";
import RemainingTime, { RemainingTimeMobile } from "./RemainingTime";
import WatchBtn from "./WatchBtn";
import classes from "./match.module.css";

export const Match = ({ matchData }) => {
  const [live, setLive] = useState(determineLive(matchData?.eventDate));
  const [watch, setWatch] = useState(determineLive(matchData?.playStream));
  const [remainingTime, setRemainingTime] = useState(calcRemainingTime(null));

  useEffect(() => {
    const interval = setInterval(() => {
      setLive(determineLive(matchData?.eventDate));
    }, 10000);

    return () => clearInterval(interval);
  }, [matchData?.eventDate]);
  useEffect(() => {
    const interval = setInterval(() => {
      setWatch(determineLive(matchData?.playStream));
    }, 10000);

    return () => clearInterval(interval);
  }, [matchData?.playStream]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calcRemainingTime(matchData?.eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [matchData?.eventDate]);
  return (
    <div className={classes["match"]}>
      <div className={classes["match-first"]}>
        <p className={classes["date"]}>{convertDateHomePage(matchData?.eventDate)}</p>
        {/* {remaingTime && (
          <div className={classes["remaining-time-mobile"]}>{remaingTime}</div>
        )} */}
        <RemainingTimeMobile timer={remainingTime} live={live} />

        <p className={classes["leage"]}>{matchData?.eventLeague}</p>
      </div>
      <div className={classes["match-second"]}>
        <div className={classes["match-details"]}>
          <p className={classes["date"]}>
            {convertDateHomePage(matchData?.eventDate)}
          </p>
          <p className={classes["leage"]}>{matchData?.eventLeague}</p>
        </div>
        <LiveBtn live={live} />
        <div className={classes["first-team"]}>
          <Image
            crossOrigin="anonymous"
            className={classes["first-team-image"]}
            src={`${process.env.STATIC_SERVER}/img/matches/${matchData?.firstTeamLogo}`}
            alt="team-logo"
            height={34}
            width={34}
          />
          <p className={classes["first-team-name"]}>
            {matchData?.firstTeamName}
          </p>
        </div>
        <div className={classes["match-vs"]}>vs</div>
        <div className={classes["second-team"]}>
          <p className={classes["second-team-name"]}>
            {matchData?.secondTeamName}
          </p>
          <Image
            crossOrigin="anonymous"
            className={classes["second-team-image"]}
            src={`${process.env.STATIC_SERVER}/img/matches/${matchData?.secondTeamLogo}`}
            alt="team-logo"
            height={34}
            width={34}
          />
        </div>
        {/* {!true ? (
          <div className={classes["status"]}>2nd Half: 47’</div>
        ) : ( */}
        {/* {remaingTime ? (
          <div className={classes["remaining-time"]}>{remaingTime}</div>
        ) : (
          <div className={classes["white-space"]}></div>
        )} */}
        <RemainingTime timer={remainingTime} live={live} />
        <WatchBtn id={matchData._id} watch={watch} />
      </div>
    </div>
  );
};

export default Match;
