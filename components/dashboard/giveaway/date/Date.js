"use client";
import React from "react";
import classes from "./date.module.css";
const Date = ({ data, dispatchPrizeDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}> Time</h2>
      <div className={classes["form"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="start">
            start
          </label>
          <input
            type="text"
            id="start"
            className={classes["input"]}
            value={data.startTime}
            onChange={(e) => {
              dispatchPrizeDetail({
                type: "START-TIME",
                value: e.target.value,
              });
            }}
          />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="end">
            end
          </label>
          <input
            type="text"
            id="end"
            className={classes["input"]}
            value={data.endTime}
            onChange={(e) => {
              dispatchPrizeDetail({ type: "END-TIME", value: e.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Date;
