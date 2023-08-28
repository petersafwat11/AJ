"use client";
import React from "react";
import classes from "./changePassword.module.css";
const ChangePassword = ({ data, changePassword }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Change Password</h2>
      <div className={classes["details"]}>
        <input
          value={data.password}
          onChange={(e) => {
            changePassword({
              confirmPassword: data.confirmPassword,
              password: e.target.value,
            });
          }}
          placeholder="Enter password...."
          className={classes["input"]}
        />
        <input
          value={data.confirmPassword}
          onChange={(e) => {
            changePassword({
              password: data.confirmPassword,
              confirmPassword: e.target.value,
            });
          }}
          placeholder="Re-enter password...."
          className={classes["input"]}
        />
      </div>
    </div>
  );
};

export default ChangePassword;
