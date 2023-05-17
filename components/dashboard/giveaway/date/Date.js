"use client";
import React, { useState } from "react";
import classes from "./date.module.css";
const Date = () => {
  const [date, setDate] = useState({ start: "", end: "" });
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}> Time</h2>
      <div className={classes["form-input"]}>
        <label className={classes["label"]} htmlFor="start">
          start
        </label>
        <input
          type="text"
          id="start"
          className={classes["input"]}
          value={date.start}
          onChange={(e) => {
            setDate({ start: e.target.value, end: date.end });
          }}
        />
      </div>
      <div className={classes["form-input"]}>
        <label className={classes["label"]} htmlFor="end">
          end
        </label>
        <input
          type="text"
          id="end"
          className={classes["input"]}
          value={date.start}
          onChange={(e) => {
            setDate({ end: e.target.value, start: date.start });
          }}
        />
      </div>
    </div>
  );
};

export default Date;
