"use client";
import React, { useReducer } from "react";
import classes from "./teamsNames.module.css";

const dateReducer = (state, action) => {
  if (action.type === "FIRST-TEAM") {
    return { ...state, firstTeam: action.value };
  }
  if (action.type === "SECOND-TEAM") {
    return { ...state, secondTeam: action.value };
  }
};

const TeamsNames = () => {
  const [teamsNames, dispatchTeamName] = useReducer(dateReducer, {
    firstTeam: "",
    secondTeam: "",
  });

  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Event team names</h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="first-team" className={classes["label-1"]}>
            Team 1
          </label>
          <input
            value={teamsNames.firstTeam}
            id="first-team"
            onChange={(e) => {
              dispatchTeamName({ type: "FIRST-TEAM", value: e.target.value });
            }}
            placeholder="team 1"
            className={classes["input-1"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="second-team" className={classes["label-2"]}>
            Team 1
          </label>
          <input
            value={teamsNames.secondTeam}
            id="second-team"
            onChange={(e) => {
              dispatchTeamName({ type: "SECOND-TEAM", value: e.target.value });
            }}
            placeholder="team 2"
            className={classes["input-2"]}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamsNames;
