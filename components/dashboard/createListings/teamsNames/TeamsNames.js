"use client";
import React, { useState } from "react";
import classes from "./teamsNames.module.css";
const TeamsNames = () => {
  const [teamsNames, setTeamsNames] = useState({
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
              setTeamsNames({
                firstTeam: e.target.value,
                secondTeam: teamsNames.secondTeam,
              });
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
              setTeamsNames({
                secondTeam: e.target.value,
                firstTeam: teamsNames.firstTeam,
              });
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
