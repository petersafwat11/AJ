"use client";
import Image from "next/image";
import React, { useState } from "react";
import Statistics from "../statistics/Statistics";
import LiveUpdates from "./liveUpdates/LiveUpdates";
import classes from "./tikticksBasketBall.module.css";
const Takticks = () => {
  const players = [
    { num: "one" },
    { num: "two" },
    { num: "three" },
    { num: "four" },
    { num: "five" },
    { num: "six" },
    { num: "seven" },
    { num: "eight" },
    { num: "nine" },
    { num: "ten" },
  ];
  const [category, setCategory] = useState("lineups");
  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <p
          onClick={() => {
            setCategory("lineups");
          }}
          style={{
            borderBottom: category == "lineups" ? "2px solid #03a1cd" : "",
            color: category == "lineups" ? "#03a1cd" : "",
          }}
          className={classes["header-item"]}
        >
          LINEUPS
          <span className={classes["ripple"]}></span>
        </p>
        <p
          onClick={() => {
            setCategory("statistics");
          }}
          style={{
            borderBottom: category == "statistics" ? "2px solid #03a1cd" : "",
            color: category == "statistics" ? "#03a1cd" : "",
          }}
          className={classes["header-item"]}
        >
          STATISTICS
        </p>
      </div>
      {category == "lineups" ? (
        <div className={classes["takticks"]}>
          <div className={classes["substitute-first-team"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
              <div key={index} className={classes["substitute-player"]}>
                <Image
                  src="/svg/watch/vest-grey.svg"
                  alt="player"
                  height="25"
                  width="33"
                />
                <p>M. Jordan</p>
              </div>
            ))}
          </div>
          <div className={classes["stadium"]}>
            {players.slice(0, 5).map((item, index) => (
              <div key={index} className={classes[item.num]}>
                <Image
                  src="/svg/watch/vest-grey.svg"
                  alt="player"
                  height="32"
                  width="37"
                />
                <p>lorem</p>
              </div>
            ))}
            {players.slice(5, 10).map((item, index) => (
              <div key={index} className={classes[item.num]}>
                <Image
                  src="/svg/watch/vest-white.svg"
                  alt="player"
                  height="32"
                  width="37"
                />
                <p>lorem</p>
              </div>
            ))}
          </div>
          <div className={classes["substitute-second-team"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
              <div key={index} className={classes["substitute-player"]}>
                <Image
                  src="/svg/watch/vest-white.svg"
                  alt="player"
                  height="25"
                  width="33"
                />
                <p>M. Jordan</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classes["stats-container"]}>
          <Statistics
            optionsOne={[
              "FIELD GOALS",
              "3 POINTERS %",
              "FREE THROWS %",
              "TOTAL REBOUNDS",
              "OFFENSIVE REBOUNDS",
            ]}
            optionsTwo={["ASSISTS", "BLOCKS", "STEALS", "TURNOVERS", "FOULS"]}
          />
          <div>
            <LiveUpdates />
          </div>
        </div>
      )}
    </div>
  );
};

export default Takticks;
