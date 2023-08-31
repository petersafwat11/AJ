"use client";
import React from "react";
import classes from "./changePassword.module.css";
const ChangePassword = ({ data, changePassword, changePasswordHandler }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Change Password</h2>
      <div className={classes["details"]}>
        <input
          value={data.passwordCurrent}
          onChange={(e) => {
            changePassword({
              ...data,
              passwordCurrent: e.target.value,
            });
          }}
          type="password"
          placeholder="Enter old password...."
          className={classes["input"]}
        />
        <input
          value={data.password}
          onChange={(e) => {
            changePassword({
              ...data,
              password: e.target.value,
            });
          }}
          type="password"
          placeholder="Enter password...."
          className={classes["input"]}
        />
        <input
          value={data.passwordConfirm}
          onChange={(e) => {
            changePassword({
              ...data,
              passwordConfirm: e.target.value,
            });
          }}
          type="password"
          placeholder="Re-enter password...."
          className={classes["input"]}
        />
      </div>
      <button onClick={changePasswordHandler} className={classes["save"]}>
        save changes
      </button>
    </div>
  );
};

export default ChangePassword;
