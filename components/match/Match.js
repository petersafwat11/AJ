"use client";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./match.module.css";

export const Match = ({ live }) => {
  const router = useRouter();
  return (
    <div className={classes["match"]}>
      <div className={classes["match-first"]}>
        <p className={classes["date"]}>Aug 18 - 15:00</p>
        {live ? (
          <div className={classes["status-mobile"]}>2nd Half: 47’</div>
        ) : (
          <div className={classes["remaining-time-mobile"]}>15h 20m 15s</div>
        )}
        <p className={classes["leage"]}>Premeir League</p>
      </div>
      <div className={classes["match-second"]}>
        <div className={classes["match-details"]}>
          <p className={classes["date"]}>Aug 18 - 15:00</p>
          <p className={classes["leage"]}>Premeir League</p>
        </div>
        {live ? (
          <div className="live-button-div">
            <div className={classes["live-button"]}>
              <span></span>
              <p>Live</p>
            </div>
          </div>
        ) : (
          <div className={classes["not-live"]}>LIVE</div>
        )}
        <div className={classes["first-team"]}>
          <img
            className={classes["first-team-image"]}
            src="/svg/teams/man-united.svg"
            alt="nfl"
            // width="31"
            height="31"
          />
          <p className={classes["first-team-name"]}>Man Utd</p>
        </div>
        <div className={classes["match-vs"]}>vs</div>
        <div className={classes["second-team"]}>
          <p className={classes["second-team-name"]}>Liverpool</p>

          <img
            className={classes["second-team-image"]}
            src="/svg/teams/liverpool.svg"
            alt="liverpool"
            // width="31"
            height="31"
          />
        </div>
        {live ? (
          <div className={classes["status"]}>2nd Half: 47’</div>
        ) : (
          <div className={classes["remaining-time"]}>15h 20m 15s</div>
        )}
        <div className={classes["action-button"]}>
          <button
            onClick={() => {
              router.push("/watch");
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
