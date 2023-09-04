import React from "react";
import classes from './remainingTime.module.css'
import { getMatchDate } from "../../utils/convertDateFormat";
const RemainingTime = ({date}) => {
  return (
    <p className={classes["date"]}>{getMatchDate(date)}</p>
  );
};

export default RemainingTime;
