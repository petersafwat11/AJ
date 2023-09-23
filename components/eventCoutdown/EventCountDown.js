"use client";
import Image from "next/image";
import React from "react";
import classes from "./eventCountdown.module.css";
const EventCountDown = ({ remainingTime }) => {
  return (
    <div className={classes["container"]}>
      <Image
        className={classes["logo"]}
        src="/svg/watch/event-will-start/logo.svg"
        alt="logo"
        width="78"
        height="56"
      />
      <div className={classes["text-wrapper"]}>
        <p className={classes["text"]}>The event will start in </p>
        <p className={classes["remaining-time"]}>{remainingTime} </p>
      </div>
    </div>
  );
};

export default EventCountDown;
