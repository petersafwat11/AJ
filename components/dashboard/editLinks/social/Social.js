import React, { useState } from 'react'
import classes from './social.module.css'
const Social = () => {
    const [socialLinks, setSocialLinks] = useState({
      Facebook: "",
      Telegram: "",
      Twitter: "",
      Tiktok: "",
      Discord:''
    }); 
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
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
      </div>
      <div className={classes["second"]}></div>
      <div className={classes["third"]}></div>
    </div>
  );
}

export default Social