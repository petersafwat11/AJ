"use client";
import React, { useState } from "react";
import classes from "./loginForm.module.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={classes["form"]}>
      <div className={classes["input-group"]}>
        <label htmlFor="email" className={classes["label"]}>
          Email
        </label>
        <input
          placeholder="Enter Your Email"
          className={classes["input"]}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={classes["input-group"]}>
        <label htmlFor="email" className={classes["label"]}>
          Password
        </label>
        <input
          placeholder="Enter Your Password"
          className={classes["input"]}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className={classes["login-button"]}>Log in</button>
      <p className={classes['forget-password']}> Forgot password?</p>
    </div>
  );
};

export default LoginForm;
