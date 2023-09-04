"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { calcRemainingTime } from "../../utils/convertDateFormat";
import classes from "./eventCountdown.module.css";
const EventCountDown = ({ eventStartDate }) => {
  const callRemainingTime = () => calcRemainingTime(eventStartDate);

  const [remaingTime, setRemainingTime] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(callRemainingTime());
    }, 1000);
  }, [setRemainingTime, callRemainingTime]);
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
        <p className={classes["remaining-time"]}>{remaingTime} </p>
      </div>
    </div>
  );
};

export default EventCountDown;
