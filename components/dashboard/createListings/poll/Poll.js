"use client";
import React, { useState } from "react";
import classes from "./poll.module.css";
const Poll = () => {
  const [teamsNames, setTeamsNames] = useState({
    firstTeam: "",
    secondTeam: "",
  });
  const [checked, setChecked] = useState(false);
  const [whoWillWin, setWhoWillWin] = useState("");
  return (
    <div className={classes["container"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Poll</h2>
        <div className={classes["toggler-wrapper"]}>
          <label className={classes["toggle"]}>
            <input
              onChange={() => {
                setChecked(!checked);
              }}
              className={classes["toggle-checkbox"]}
              type="checkbox"
            />
            <div className={classes["toggle-switch"]}></div>
            <span className={classes["toggle-label"]}>
              {checked ? "ON" : "OFF"}
            </span>
          </label>
        </div>
      </div>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="first-team" className={classes["label"]}>
            Team 1
          </label>
          <input
            value={teamsNames.firstTeam}
            id="first-team"
            onChange={(e) => {
              setTeamsNames({
                firstTeam: e.target.value,
                secondTeam: teamsNames.secondTeam,
              });
            }}
            placeholder="team 1"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="second-team" className={classes["label"]}>
            Team 1
          </label>
          <input
            value={teamsNames.secondTeam}
            id="second-team"
            onChange={(e) => {
              setTeamsNames({
                secondTeam: e.target.value,
                firstTeam: teamsNames.firstTeam,
              });
            }}
            placeholder="team 2"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Poll;
