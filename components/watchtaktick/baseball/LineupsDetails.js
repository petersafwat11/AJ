import React, { useState } from "react";
import Details from "../details/Details";
import classes from "./lineupsDetails.module.css";
const LineupsDetails = ({ matchDetails }) => {
  const [showMatchDetails, setShowMatchDetails] = useState("first");

  return (
    <div className={classes["container"]}>
      <div className={classes["showMatchDetails"]}>
        <div
          onClick={() => {
            setShowMatchDetails("first");
          }}
          className={
            classes[showMatchDetails === "first" ? "dot-selected" : "dot"]
          }
        >
          <div
            className={
              classes[
                showMatchDetails === "first"
                  ? "meduim-dot-selected"
                  : "meduim-dot"
              ]
            }
          >
            <span
              className={
                classes[
                  showMatchDetails === "first"
                    ? "small-dot-selected"
                    : "small-dot"
                ]
              }
            ></span>
          </div>
        </div>
        <div
          onClick={() => {
            setShowMatchDetails("second");
          }}
          className={
            classes[showMatchDetails === "second" ? "dot-selected" : "dot"]
          }
        >
          <div
            className={
              classes[
                showMatchDetails === "second"
                  ? "meduim-dot-selected"
                  : "meduim-dot"
              ]
            }
          >
            <span
              className={
                classes[
                  showMatchDetails === "second"
                    ? "small-dot-selected"
                    : "small-dot"
                ]
              }
            ></span>
          </div>
        </div>
      </div>

      <Details matchDetails={matchDetails} />
      {/* fuck u  */}
    </div>
  );
};

export default LineupsDetails;
