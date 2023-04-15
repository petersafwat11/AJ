import React from "react";
import classes from "./teamsLogos.module.css";
const TeamsLogos = () => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Logos</h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>BACKGROUND</label>
          <span className={classes["upload"]}>Upload</span>
          <input className={classes["input"]} type="file" hidden />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>League</label>
          <span className={classes["upload"]}>Upload</span>
          <input className={classes["input"]} type="file" hidden />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>Team 1</label>
          <span className={classes["upload"]}>Upload</span>
          <input className={classes["input"]} type="file" hidden />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]}>Team 2</label>
          <span className={classes["upload"]}>Upload</span>
          <input className={classes["input"]} type="file" hidden />
        </div>
      </div>
    </div>
  );
};

export default TeamsLogos;
