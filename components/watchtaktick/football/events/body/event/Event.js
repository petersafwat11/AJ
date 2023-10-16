import Image from "next/image";
import React from "react";
import classes from "./event.module.css";
const Event = ({ eventType, team }) => {
  return (
    <div
      className={
        team === "first team"
          ? classes["container"]
          : classes["container-reverse"]
      }
    >
      <div
        className={
          team === "first team" ? classes["event"] : classes["event-reverse"]
        }
      >
        {eventType === "yellow card" ? (
          <Image
            className={classes["yellow-card"]}
            src="/svg/watch/football/yellow-card.svg"
            alt="yellow card"
            width="23"
            height="33"
          />
        ) : eventType === "red card" ? (
          <Image
            className={classes["red-card"]}
            src="/svg/watch/football/red-card.svg"
            alt="red card"
            width="23"
            height="33"
          />
        ) : eventType === "var" ? (
          <Image
            className={classes["var"]}
            src="/svg/watch/football/var.svg"
            alt="var"
            width="30"
            height="34"
          />
        ) : eventType === "substitute" ? (
          <Image
            className={classes["substitute"]}
            src="/svg/watch/football/substitute.svg"
            alt="substitute"
            width="21"
            height="26"
          />
        ) : eventType === "goal" ? (
          <Image
            className={classes["goal"]}
            src="/svg/watch/football/goal.svg"
            alt="goal"
            width="27"
            height="27"
          />
        ) : eventType === "penalty" ? (
          <Image
            className={classes["penalty"]}
            src="/svg/watch/football/penalty.svg"
            alt="penalty"
            width="27"
            height="27"
          />
        ) : (
          <Image
            className={classes["own-goal"]}
            src="/svg/watch/football/own-goal.svg"
            alt="own goal"
            width="27"
            height="27"
          />
        )}

        {eventType !== "substitute" ? (
          <p className={classes["player-name"]}>C. Ronaldo</p>
        ) : (
          <div>
            <p className={classes["player-in"]}>C. Ronaldo</p>
            <p className={classes["player-out"]}>Gavi</p>
          </div>
        )}
      </div>

      <div
        className={
          team === "first team" ? classes["time"] : classes["time-reverse"]
        }
      >
        <p className={classes["min"]}> 2’</p>
      </div>
    </div>
  );
};

export default Event;
