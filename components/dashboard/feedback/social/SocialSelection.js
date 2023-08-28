"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./social.module.css";
const FeedbackSelection = ({feebackType, changeFeedbackType}) => {
  const [showOptions, setShowOptions] = useState(false);
  const options = ["All Feedback", "Flagged", "Feedback Only"];
  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{feebackType}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {options.map((item, index) => (
            <p
              onClick={() => {
                changeFeedbackType(item);
                setShowOptions(false);
              }}
              className={classes["option"]}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackSelection;
