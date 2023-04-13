import React, { useState } from "react";
import classes from "./eventsDetails.module.css";
const EventsDetails = () => {
  const [eventsDetails, setEventDetails] = useState({
    date: "",
    dateText: "",
    league: "",
    time: "",
    stadium: "",
  });
  return (
    <div className={classes["container"]}>
      <h2>Event details</h2>
      <div className={classes["details-first"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="date" className={classes["label"]}>
            Date
          </label>
          <input
            value={eventsDetails.date}
            id="date"
            onChange={(e) => {
              eventsDetails({
                ...EventsDetails,
                date: e.target.value,
              });
            }}
            placeholder="date"
            className="input"
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
              eventsDetails({
                ...EventsDetails,
                dateText: e.target.value,
              });
            }}
            placeholder="date text"
            className="input"
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="league" className={classes["label"]}>
            Date Text
          </label>
          <input
            value={eventsDetails.league}
            id="league"
            onChange={(e) => {
              eventsDetails({
                ...EventsDetails,
                league: e.target.value,
              });
            }}
            placeholder="leugue"
            className="input"
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
              eventsDetails({
                ...EventsDetails,
                time: e.target.value,
              });
            }}
            placeholder="time"
            className="input"
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
              eventsDetails({
                ...EventsDetails,
                stadium: e.target.value,
              });
            }}
            placeholder="stadium"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
