"use client";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../store/timerSlice";
import { calcRemainingTime } from "../../utils/convertDateFormat";
import classes from "./remainingTime.module.css";

const RemainingTime = ({ live , timer}) => {
  return live ? (
    <div className={classes["white-space-1"]}></div>
  ) : (
    <p className={classes["remaining-time"]}>{timer}</p>
  );
};

export default RemainingTime;


export const RemainingTimeMobile = ({ live , timer}) => {
  return live ? (
    <div className={classes["white-space-2"]}></div>
  ) : (
    <p className={classes["remaining-time-mobile"]}>{timer}</p>
  );
}
