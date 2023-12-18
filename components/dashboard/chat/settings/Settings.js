"use client";
import React, { useState } from "react";
import classes from "./settings.module.css";
const Settings = () => {
  const [chatMode, setChatMode] = useState("Anyone Can Send");
  const [secondsRemaining, setSecondsRemaining] = useState("");
  const [slowMode, setSlowMode] = useState(false);
  const toggleSlowMode = () => {
    setSlowMode(!slowMode);
  };
  const onSave = () => {};
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
                  onChange={toggleSlowMode}
                  className={classes["toggle-checkbox"]}
                  type="checkbox"
                />
                <div className={classes["toggle-switch"]}></div>
              </label>
            </div>
          </div>
          <input
            value={secondsRemaining}
            placeholder="Enter seconds"
            onChange={(e) => {
              setSecondsRemaining(e.target.value);
            }}
            className={classes["input"]}
          />
          <button onClick={onSave} className={classes["save-button"]}>
            Save changes
          </button>
        </div>
        <div className={classes["second"]}>
          <h4 className={classes["sub-title"]}>Mode</h4>
          <div className={classes["options"]}>
            {["Anyone Can Send", "Only Moderators", "No One"].map(
              (item, index) => (
                <div key={index + index} className={classes["option-group"]}>
                  <label
                    onClick={() => {
                      setChatMode(item);
                      console.log("checked");
                    }}
                    className={classes["custom-checkbox"]}
                  >
                    <input checked={item === chatMode} type="checkbox" />
                    <span className={classes["checkmark"]}></span>
                  </label>
                  <label className={classes["label"]}>{item} </label>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
