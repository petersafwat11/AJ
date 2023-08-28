"use client";
import Image from "next/image";
import React from "react";
import TopIndecator from "../topIndecators/TopIndecator";
import classes from "./stepOne.module.css";
const StepOne = ({ indicatorsNum, dispatchAction, userInfo }) => {
  return (
    <div className={classes["step-one"]}>
      <div className={classes["top"]}>
        <TopIndecator indicatorsNum={indicatorsNum} curState={1} />
        <Image
          onClick={() => {
            dispatchAction({
              type: "STEPS",
              value: null,
            });
          }}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["body"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="full-name" className={classes["label"]}>
            Full name
          </label>
          <input
            value={userInfo.fullName}
            onChange={(e) => {
              dispatchAction({
                type: "USER-INFO",
                value: { ...userInfo, fullName: e.target.value },
              });
            }}
            id="full-name"
            type="text"
            placeholder="Enter your name..."
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="email" className={classes["label"]}>
            Email Address
          </label>
          <input
            value={userInfo.email}
            onChange={(e) => {
              dispatchAction({
                type: "USER-INFO",
                value: { ...userInfo, email: e.target.value },
              });
            }}
            id="email"
            type="email"
            placeholder="Enter your email..."
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["bottom"]}>
        <p className={classes["bottom-para"]}>
          Please enter the details accurately as the winner will be contacted
          via email.
        </p>
        <button
          onClick={() => {
            if (indicatorsNum === 3) {
              dispatchAction({ type: "STEPS", value: 2 });
            } else {
              dispatchAction({ type: "STEPS", value: 3 });
            }
          }}
          className={classes["next-button"]}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
