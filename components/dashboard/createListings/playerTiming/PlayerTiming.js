import React from "react";
import classes from "./playerTiming.module.css";

const PlayerTiming = ({
  title,
  width,
  data,
  dispatchDetail,
  dispatchActionType,
}) => {
  return (
    <div style={{ width: width ? width : "" }} className={classes["container"]}>
      <h2 className={classes["title"]}>{title} </h2>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="date" className={classes["label"]}>
            Date
          </label>
          <input
            value={data}
            id="date"
            onChange={(e) => {
              dispatchDetail({
                type: dispatchActionType,
                value: e.target.value,
              });
            }}
            placeholder="enter the date"
            className={classes["input"]}
          />
        </div>
        {/* <div className={classes["input-group"]}>
          <label htmlFor="time" className={classes["label"]}>
            Time
          </label>
          <input
            value={data.time}
            id="time"
            onChange={(e) => {
              dispatchDetail({
                type: dispatchActionType,
                value: { ...data, time: e.target.value },
              });
            }}
            placeholder="enter the time"
            className={classes["input"]}
          />
        </div> */}
      </div>
    </div>
  );
};

export default PlayerTiming;
