"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./social.module.css";
const SocialSelection = () => {
  const sports = ["Facebook"];
  const [selectedSport, setSelectedSport] = useState("Football");
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{selectedSport}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {sports.map((item, index) => (
            <p
              onClick={() => {
                setSelectedSport(item);
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

export default SocialSelection;
