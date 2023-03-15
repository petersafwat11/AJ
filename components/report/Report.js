"use client";
import React, { useState } from "react";
import classes from "./report.module.css";
const Report = ({ toggleReport }) => {
  const [cause, setCause] = useState("");
  return (
    <div className={classes["report"]}>
      <div className={classes["causes"]}>
        <div
          onClick={() => {
            setCause("Stream not working");
          }}
          className={classes["cause"]}
        >
          <span
            style={{
              background: cause === "Stream not working" ? "#00B1FF" : "",
            }}
          ></span>
          <p>Stream not working</p>
        </div>
        <div
          onClick={() => {
            setCause("Wrong Match");
          }}
          className={classes["cause"]}
        >
          <span
            style={{
              background: cause === "Wrong Match" ? "#00B1FF" : "",
            }}
          ></span>
          <p>Wrong Match</p>
        </div>
        <div
          onClick={() => {
            setCause("Lag");
          }}
          className={classes["cause"]}
        >
          <span
            style={{
              background: cause === "Lag" ? "#00B1FF" : "",
            }}
          ></span>
          <p>Lag</p>
        </div>
      </div>
      <p className={classes["try-again-para"]}>
        Please try another server in the meantime!
      </p>
      <div className={classes["actions"]}>
        <button className={classes["send-button"]}>Send</button>
        <button onClick={toggleReport} className={classes["close-button"]}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Report;
