"use client";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./sportsSelection.module.css";
const SportsSelection = ({ sportsType, changeSportsType }) => {
  const categories = [
    "Football",
    "Basketball",
    "NFL",
    "Fights",
    "Netball",
    "Volleyball",
    "Handball",
    "Tennis",
    "WWE",
    "F1",
    "Baseball",
    "Nascar",
    "Darts",
    "Cricket",
    "Hockey",
    "HorseRacing",
    "Rugby",
    "Tabletennis",
  ];

  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className={classes["selection"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["selected"]}
      >
        <p className={classes["selected-sport"]}>{sportsType}</p>
        <MdKeyboardArrowDown className={classes["arrow"]} />
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {categories.map((item, index) => (
            <p
              onClick={() => {
                changeSportsType(item);
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

export default SportsSelection;
