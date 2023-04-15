"use client";
import React, { useState } from "react";
import classes from "./createUserAccounnt.module.css";
const UseDetails = ({ edit }) => {
  const [accoutDetails, setAccountDetails] = useState({
    name: "",
    password: "",
    role: "",
    email: "",
  });
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
        <h2 className={classes["title"]}>Create User Accounnt</h2>
        <div className={classes["details"]}>
          <div className={classes["details-wrapper"]}>
            <div className={classes["input-group"]}>
              <label htmlFor="name" className={classes["label"]}>
                Display name
              </label>
              <input
                id="name"
                className={classes["input"]}
                onChange={(e) => {
                  setAccountDetails({
                    ...accoutDetails,
                    name: e.target.value,
                  });
                }}
                value={accoutDetails.name}
                type="text"
                placeholder="Display name"
              />
            </div>
            <div className={classes["input-group"]}>
              <label htmlFor="password" className={classes["label"]}>
                password
              </label>
              <input
                id="password"
                className={classes["input"]}
                onChange={(e) => {
                  setAccountDetails({
                    ...accoutDetails,
                    password: e.target.value,
                  });
                }}
                value={accoutDetails.password}
                type="password"
                placeholder="password"
              />
            </div>
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="email" className={classes["label"]}>
              email
            </label>
            <input
              id="email"
              className={classes["input"]}
              onChange={(e) => {
                setAccountDetails({
                  ...accoutDetails,
                  email: e.target.value,
                });
              }}
              value={accoutDetails.email}
              type="email"
              placeholder="email"
            />
          </div>
          <button className={classes["create-button"]}>
            {edit ? "Save" : "Create"}
          </button>
        </div>
      </div>
      <div className={classes["second"]}>
        <h2 className={classes["title"]}>Role</h2>
        <div className={classes["details"]}>
          <div className={classes["checkbox-input-group"]}>
            <input id="admin" type="checkbox" className={classes["checkbox"]} />
            <label htmlFor="admin" className={classes["label"]}>
              Admin
            </label>
          </div>
          <div className={classes["checkbox-input-group"]}>
            <input
              id="moderator"
              type="checkbox"
              className={classes["checkbox"]}
            />
            <label htmlFor="moderator" className={classes["label"]}>
              Moderator
            </label>
          </div>
          <div className={classes["checkbox-input-group"]}>
            <input
              id="manager"
              type="checkbox"
              className={classes["checkbox"]}
            />
            <label htmlFor="manager" className={classes["label"]}>
              Manager
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseDetails;
