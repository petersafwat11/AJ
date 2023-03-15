"use client";
import Image from "next/image";
import React, { useState } from "react";
import classes from "./tikticks.module.css";
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
            borderBottom: category == "lineups" ? "1.5px solid #03a1cd" : "",
            color: category == "lineups" ? "#03a1cd" : "",
          }}
          className={classes["header-item"]}
        >
          LINEUPS
          <span className={classes["ripple"]}></span>
        </p>
        <p
          onClick={() => {
            setCategory("stats");
          }}
          style={{
            borderBottom: category == "stats" ? "1px solid #03a1cd" : "",
            color: category == "stats" ? "#03a1cd" : "",
          }}
          className={classes["header-item"]}
        >
          {" "}
          STATS
        </p>

        <p
          onClick={() => {
            setCategory("subsitutes");
          }}
          style={{
            borderBottom: category == "subsitutes" ? "1px solid #03a1cd" : "",
            color: category == "subsitutes" ? "#03a1cd" : "",
          }}
          className={classes["header-item"]}
        >
          SUBSITUTES
        </p>
      </div>
      {category == "lineups" ? (
        <div className={classes["takticks"]}>
          <div className={classes["substitute-first-team"]}>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div key={index} className={classes["substitute-player"]}>
                <Image
                  src="/svg/watch/one.svg"
                  alt="player"
                  height="27"
                  width="35"
                />
                <p>C. Ronaldo</p>
              </div>
            ))}
          </div>
          <div className={classes["stadium"]}>
            <div className={classes["goalkeaper-first"]}>
              <Image
                className={classes["team-shirt"]}
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["one"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["two"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["three"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["four"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["five"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["six"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["seven"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["eight"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["nine"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["ten"]}>
              <Image
                src="/svg/watch/one.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["goalkeaper-second"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["eleven"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["twelve"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["thirteen"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["fourteen"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
              <span className={classes["red-card"]}></span>
            </div>
            <div className={classes["fivteen"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["sixteen"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["seventeen"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["eighteen"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
              <span className={classes["yellow-card"]}></span>
            </div>
            <div className={classes["nineteen"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
            <div className={classes["twenty"]}>
              <Image
                src="/svg/watch/two.svg"
                alt="player"
                height="27"
                width="35"
              />
              <p>lorem</p>
            </div>
          </div>
          <div className={classes["substitute-second-team"]}>
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div key={index} className={classes["substitute-player"]}>
                <Image
                  src="/svg/watch/one.svg"
                  alt="player"
                  height="27"
                  width="35"
                />
                <p>M. Salah</p>
              </div>
            ))}
          </div>
        </div>
      ) : category === "stats" ? (
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Takticks;
