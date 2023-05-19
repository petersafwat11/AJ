"use client";
import React, { useState } from "react";
import classes from "./RNG.module.css";
const RNG = () => {
  const generateWinner = () => {};
  const [winner, setWinner] = useState({ fullName: "", email: "" });

  return (
    <div className={classes["container"]}>
      <button className={classes["generate"]}>Generate</button>
      <div className={classes["form"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="username">
            Full Name
          </label>
          <input
            type="text"
            id="username"
            className={classes["input"]}
            value={winner.fullName}
            onChange={(e) => {
              setWinner({ fullName: e.target.value, email: winner.email });
            }}
          />
        </div>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="email">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            className={classes["input"]}
            value={winner.email}
            onChange={(e) => {
              setWinner({ email: e.target.value, fullName: winner.fullName });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RNG;
