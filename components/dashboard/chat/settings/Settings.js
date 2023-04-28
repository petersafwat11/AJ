"use client";
import React, { useState } from "react";
import TimeSelection from "./TimeSelection/TimeSelection";
import classes from "./settings.module.css";
const Settings = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Chat settings</h2>
      <div className={classes["settings"]}>
        <div className={classes["first"]}>
          <div className={classes["toggle-slow-mode"]}>
            <p>Slow Mode</p>
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
          <TimeSelection />
        </div>
        <div className={classes["second"]}>
          <h4 className={classes["sub-title"]}>Mode</h4>
          <div className={classes["group"]}>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label htmlFor="html">HTML</label>
          </div>
          <div className={classes["group"]}>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label htmlFor="css">CSS</label>
          </div>
          <div className={classes["group"]}>
            <input
              type="radio"
              id="javascript"
              name="fav_language"
              value="JavaScript"
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
