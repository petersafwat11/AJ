"use client";
import React from "react";
import classes from "./eventsDetails.module.css";

const EventsDetails = ({ data, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Event details</h2>
      <div className={classes["details-first"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="date" className={classes["label"]}>
            Date
          </label>
          <input
            value={data.eventDate}
            id="date"
            onChange={(e) => {
              dispatchDetail({
                type: "EVENT-DATE",
                value: e.target.value,
              });
            }}
            placeholder="date"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="match-id" className={classes["label"]}>
            Match ID
          </label>
          <input
            value={data.matchId}
            id="match-id"
            onChange={(e) => {
              dispatchDetail({
                type: "MATCH-ID",
                value: e.target.value,
              });
            }}
            placeholder="Match ID"
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["details-second"]}>
        {/* <div className={classes["input-group"]}>
          <label htmlFor="time" className={classes["label"]}>
            Time
          </label>
          <input
            value={data.time}
            id="time"
            onChange={(e) => {
              dispatchDetail({
                type: "EVENT-DETAILS",
                value: { ...data, time: e.target.value },
              });
            }}
            placeholder="time"
            className={classes["input"]}
          />
        </div> */}
        <div className={classes["input-group"]}>
          <label htmlFor="league" className={classes["label"]}>
            League
          </label>
          <input
            value={data.eventLeague}
            id="league"
            onChange={(e) => {
              dispatchDetail({
                type: "EVENT-LEAGUE",
                value: e.target.value,
              });
            }}
            placeholder="leugue"
            className={classes["input"]}
          />
        </div>

        <div className={classes["input-group"]}>
          <label htmlFor="stadium" className={classes["label"]}>
            Stadium
          </label>
          <input
            value={data.eventStadium}
            id="stadium"
            onChange={(e) => {
              dispatchDetail({
                type: "EVENT-STADIUM",
                value: e.target.value,
              });
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
