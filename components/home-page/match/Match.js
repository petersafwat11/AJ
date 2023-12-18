"use client";
import React, { useEffect, useState } from "react";
import { extarctDateAndTime } from "../../../utils/combineDate";
import {
  calcRemainingTime,
  determineLive,
  getMatchDate,
} from "../../../utils/convertDateFormat";
import LiveBtn from "./LiveBtn";
import RemainingTime, { RemainingTimeMobile } from "./RemainingTime";
import WatchBtn from "./WatchBtn";
import classes from "./match.module.css";

export const Match = ({ matchData, type, index, length }) => {
  const [live, setLive] = useState(determineLive(matchData?.eventDate));
  const [remainingTime, setRemainingTime] = useState(
    calcRemainingTime(matchData?.eventDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(calcRemainingTime(matchData?.eventDate));
      setLive(determineLive(matchData?.playStream));
    }, 1000);

    return () => clearInterval(interval);
  }, [matchData?.eventDate, matchData?.playStream]);
  return (
    <>
      <div
        className={
          type === "hot-matches" ? classes["hot-match"] : classes["other-match"]
        }
      >
        <div className={classes["match-first"]}>
          <p className={classes["date"]}>
            {" "}
            {` ${getMatchDate(matchData?.eventDate, true)}- ${
              extarctDateAndTime(matchData?.eventDate).time
            }`}
          </p>
          <RemainingTimeMobile timer={remainingTime} live={live} />

          <p className={classes["leage"]}>{matchData?.eventLeague}</p>
        </div>
        <div className={classes["match-second"]}>
          <div className={classes["match-details"]}>
            <p className={classes["date"]}>
              {` ${getMatchDate(matchData?.eventDate, true)}- ${
                extarctDateAndTime(matchData?.eventDate).time
              }`}
            </p>
            <p className={classes["leage"]}>{matchData?.eventLeague}</p>
          </div>
          <LiveBtn live={live} />
          {matchData?.firstTeamName && matchData?.secondTeamName ? (
            <>
              <div className={classes["first-team"]}>
                <img
                  default-team-icon
                  crossOrigin="anonymous"
                  className={classes["first-team-image"]}
                  src={
                    matchData?.firstTeamLogo !== null
                      ? `${process.env.STATIC_SERVER}/img/matches/${matchData?.firstTeamLogo}`
                      : "/svg/home/default-team-icon.svg"
                  }
                  alt="logo"
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
                <img
                  crossOrigin="anonymous"
                  className={classes["second-team-image"]}
                  src={
                    matchData?.secondTeamLogo !== null
                      ? `${process.env.STATIC_SERVER}/img/matches/${matchData?.secondTeamLogo}`
                      : "/svg/home/default-team-icon.svg"
                  }
                  alt="logo"
                  width={34}
                />
              </div>
            </>
          ) : (
            <div className={classes["teams-title"]}>
              {matchData?.teamsTitle}
            </div>
          )}
          {/* {!true ? (
          <div className={classes["status"]}>2nd Half: 47’</div>
        ) : ( */}
          {/* {remaingTime ? (
          <div className={classes["remaining-time"]}>{remaingTime}</div>
        ) : (
          <div className={classes["white-space"]}></div>
        )} */}
          <RemainingTime timer={remainingTime} live={live} />
          <WatchBtn
            id={
              matchData?.firstTeamName && matchData?.secondTeamName
                ? `${matchData?.firstTeamName.replace(
                    / /g,
                    "-"
                  )}-VS-${matchData?.secondTeamName.replace(/ /g, "-")}`
                : `${matchData?.teamsTitle.replace(/ /g, "-")}`
            }
          />
        </div>
      </div>
      {index + 1 !== length && (
        <span
          className={
            type === "hot-matches"
              ? classes["hot-matches-devider"]
              : classes["other-matches-devider"]
          }
        ></span>
      )}
    </>
  );
};

export default Match;
