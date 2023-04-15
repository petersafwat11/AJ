"use client";
import React, { useState } from "react";
import classes from "./changePassword.module.css";
const ChangePassword = () => {
  const [teamsNames, setTeamsNames] = useState({
    firstTeam: "",
    secondTeam: "",
  });
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Event team names</h2>
      <div className={classes["details"]}>
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
  );
};

export default ChangePassword;
