"use client";
import React, { useReducer } from "react";
import classes from "./playerTiming.module.css";

const dateReducer = (state, action) => {
  if (action.type === "DATE") {
    return { date: action.value, time: state.time };
  }
  if (action.type === "TIME") {
    return { time: action.value, date: state.date };
  }
};
const PlayerTiming = ({ title, width }) => {
  const [dateAndTime, dispatchDate] = useReducer(dateReducer, {
    date: "",
    time: "",
  });

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
              dispatchDate({ type: "DATE", value: e.target.value });
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
            value={dateAndTime.time}
            id="time"
            onChange={(e) => {
              dispatchDate({ type: "TIME", value: e.target.value });
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
