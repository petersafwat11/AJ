"use client";
import Image from "next/image";
import React, { useState } from "react";
import classes from "./tikticksBasketBall.module.css";
const Takticks = () => {
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
                  height="27"
                  width="35"
                />
                <p>M. Jordan</p>
              </div>
            ))}
          </div>
          <div className={classes["stadium"]}>
            <div className={classes["one"]}>
              <Image
                src="/svg/watch/vest-grey.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["two"]}>
              <Image
                src="/svg/watch/vest-grey.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["three"]}>
              <Image
                src="/svg/watch/vest-grey.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["four"]}>
              <Image
                src="/svg/watch/vest-grey.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["five"]}>
              <Image
                src="/svg/watch/vest-grey.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["six"]}>
              <Image
                src="/svg/watch/vest-white.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["seven"]}>
              <Image
                src="/svg/watch/vest-white.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["eight"]}>
              <Image
                src="/svg/watch/vest-white.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["nine"]}>
              <Image
                src="/svg/watch/vest-white.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["ten"]}>
              <Image
                src="/svg/watch/vest-white.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
          </div>
          <div className={classes["substitute-second-team"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((item, index) => (
              <div key={index} className={classes["substitute-player"]}>
                <Image
                  src="/svg/watch/vest-white.svg"
                  alt="player"
                  height="27"
                  width="35"
                />
                <p>M. Jordan</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={classes["takticks"]}>
          <div className={classes["stats"]}>
            {[
              "FIELD GOALS %",
              "3 POINTERS %",
              "FREE THROWS %",
              "TOTAL",
              "REBOUNDS",
              "OFFENSIVE",
              "REBOUNDS",
              "ASSISTS",
              "BLOCKS",
              "STEALS",
              "TURNOVERS",
              "FOULS",
            ].map((i, index) => (
              <div key={index} className={classes["stats-option"]}>
                <p className={classes["first"]}>0</p>
                <p className={classes["stats-option-name"]}>{i}</p>
                <p className={classes["second"]}>0</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Takticks;
