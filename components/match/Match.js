"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { calcRemainingTime, getMatchDate } from "../../utils/convertDateFormat";
import classes from "./match.module.css";
export const Match = ({ matchData }) => {
  console.log(
    `${process.env.STATIC_SERVER}/img/matches/${matchData?.firstTeamLogo}`
  );
  const router = useRouter();
  const callRemainingTime = useCallback(
    () => calcRemainingTime(matchData?.eventDate),
    [matchData?.eventDate]
  );
  const [remaingTime, setRemainingTime] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(callRemainingTime());
    }, 1000);
  }, [setRemainingTime, callRemainingTime]);
  return (
    <div className={classes["match"]}>
      <div className={classes["match-first"]}>
        <p className={classes["date"]}>{getMatchDate(matchData?.eventDate)}</p>
        {remaingTime && (
          <div className={classes["remaining-time-mobile"]}>{remaingTime}</div>
        )}
        <p className={classes["leage"]}>{matchData?.eventLeague}</p>
      </div>
      <div className={classes["match-second"]}>
        <div className={classes["match-details"]}>
          <p className={classes["date"]}>
            {getMatchDate(matchData?.eventDate)}
          </p>
          <p className={classes["leage"]}>{matchData?.eventLeague}</p>
        </div>
        {!remaingTime ? (
          <div className="live-button-div">
            <div className={classes["live-button"]}>
              <div className={classes["dot-wrapper"]}>
                <span></span>
              </div>
              <p>Live</p>
            </div>
          </div>
        ) : (
          <div className={classes["not-live"]}>LIVE</div>
        )}
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
        {remaingTime && (
          <div className={classes["remaining-time"]}>{remaingTime}</div>
        )}
        <div className={classes["action-button"]}>
          <button
            onClick={() => {
              router.push(`/watch/${matchData._id}`);
            }}
            className={classes["watch-button"]}
          >
            {/* 72 28 */}
            WATCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Match;
