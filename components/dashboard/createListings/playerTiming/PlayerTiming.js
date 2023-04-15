"use client";
import React, { useState } from "react";
import classes from "./playerTiming.module.css";
const PlayerTiming = ({ title, width }) => {
  const [dateAndTime, setDateAndTime] = useState({ date: "", time: "" });
  return (
    <div style={{ width: width ? width : "" }} className={classes["container"]}>
      <h2 className={classes["title"]}>{title} </h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="date" className={classes["label"]}>
            Date
          </label>
          <input
            value={dateAndTime.date}
            id="date"
            onChange={(e) => {
              setDateAndTime({
                date: e.target.value,
                time: dateAndTime.time,
              });
            }}
            placeholder="enter the date"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="time" className={classes["label"]}>
            Time
          </label>
          <input
            value={dateAndTime.date}
            id="time"
            onChange={(e) => {
              setDateAndTime({
                time: e.target.value,
                date: dateAndTime.date,
              });
            }}
            placeholder="enter the time"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerTiming;
