"use client";
import React, { useReducer, useState } from "react";
import classes from "./poll.module.css";

const dateReducer = (state, action) => {
  if (action.type === "FIRST-TEAM") {
    return { ...state, firstTeam: action.value };
  }
  if (action.type === "SECOND-TEAM") {
    return { ...state, secondTeam: action.value };
  }
};

const Poll = () => {
  const [teamsNames, dispatchTeamName] = useReducer(dateReducer, {
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
              dispatchTeamName({ type: "FIRST-TEAM", value: e.target.value });
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
              dispatchTeamName({ type: "SECOND-TEAM", value: e.target.value });
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
