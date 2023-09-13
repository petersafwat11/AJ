"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../../store/timerSlice";
import { calcRemainingTime } from "../../utils/convertDateFormat";
import classes from "./remainingTime.module.css";

const RemainingTime = ({ date }) => {
  const timer = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  const [remaingTime, setRemainingTime] = useState(true);
  const callRemainingTime = useCallback(() => calcRemainingTime(date), [date]);

  useEffect(() => {
    const interval = setInterval(() => {
      // setRemainingTime(callRemainingTime());
      dispatch(decrement(callRemainingTime()));
    }, 1000);
  }, [setRemainingTime, callRemainingTime, dispatch]);

  return remaingTime ? (
    <p className={classes["remaining-time"]}>{timer}</p>
  ) : (
    <div className={classes["white-space"]}></div>
  );
};

export default RemainingTime;
