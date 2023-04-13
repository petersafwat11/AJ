"use client";
import React, { useState } from "react";
import classes from "./teamsNames.module.css";
const TeamsNames = () => {
  const [teamsNames, setTeamsNames] = useState({
    firstTeam: " ",
    secondTeam: "",
  });
  return (
    <div className={classes["coltainer"]}>
      <h2 className={classes["title"]}>Event team names</h2>
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
          className="input"
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="second-team" className={classes["label"]}>
          Team 1
        </label>
        <input
          value={teamsNames.firstTeam}
          id="second-team"
          onChange={(e) => {
            setTeamsNames({
              secondTeam: e.target.value,
              firstTeam: teamsNames.firstTeam,
            });
          }}
          placeholder="team 2"
          className="input"
        />
      </div>
    </div>
  );
};

export default TeamsNames;
