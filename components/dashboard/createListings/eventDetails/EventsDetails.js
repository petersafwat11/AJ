"use client";
import React, { useReducer } from "react";
import classes from "./eventsDetails.module.css";
const eventsDetailsReducer = (state, action) => {
  if (action.type === "DATE") {
    return { ...state, date: action.value };
  }
  if (action.type === "DATE-TEXT") {
    return { ...state, dateText: action.value };
  }
  if (action.type === "LEAGUE") {
    return { ...state, league: action.value };
  }
  if (action.type === "TIME") {
    return { ...state, time: action.value };
  }
  if (action.type === "STADIUM") {
    return { ...state, stadium: action.value };
  }
};

const EventsDetails = () => {
  const [eventsDetails, dispatchDetail] = useReducer(eventsDetailsReducer, {
    date: "",
    dateText: "",
    league: "",
    time: "",
    stadium: "",
  });
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Event details</h2>
      <div className={classes["details-first"]}>
        <div className={classes["groups-wrapper"]}>
          <div className={classes["input-group"]}>
            <label htmlFor="date" className={classes["label"]}>
              Date
            </label>
            <input
              value={eventsDetails.date}
              id="date"
              onChange={(e) => {
                dispatchDetail({ type: "DATE", value: e.target.value });
              }}
              placeholder="date"
              className={classes["input"]}
            />
          </div>
          <div className={classes["input-group"]}>
            <label htmlFor="date-text" className={classes["label"]}>
              Date Text
            </label>
            <input
              value={eventsDetails.dateText}
              id="date-text"
              onChange={(e) => {
                dispatchDetail({ type: "DATE-TEXT", value: e.target.value });
              }}
              placeholder="date text"
              className={classes["input"]}
            />
          </div>
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="league" className={classes["label"]}>
          League 
          </label>
          <input
            value={eventsDetails.league}
            id="league"
            onChange={(e) => {
              dispatchDetail({ type: "LEAGUE", value: e.target.value });
            }}
            placeholder="leugue"
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["details-second"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="time" className={classes["label"]}>
            Time
          </label>
          <input
            value={eventsDetails.time}
            id="time"
            onChange={(e) => {
              dispatchDetail({ type: "TIME", value: e.target.value });
            }}
            placeholder="time"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="stadium" className={classes["label"]}>
            Stadium
          </label>
          <input
            value={eventsDetails.stadium}
            id="stadium"
            onChange={(e) => {
              dispatchDetail({ type: "STADIUM", value: e.target.value });
            }}
            placeholder="stadium"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
