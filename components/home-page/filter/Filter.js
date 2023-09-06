"use client";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./filter.module.css";
const Filter = ({ sportCategory, changeSportCategory }) => {
  const categories = [
    "Football",
    "Basketball",
    "NFL",
    "Boxing",
    "Netball",
    "Volleyball",
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

  return (
    <div className={classes["container"]}>
      <div className={classes["selected"]}>
        <p className={classes["selected-sport"]}>{sportCategory}</p>
        <MdOutlineKeyboardArrowDown className={classes["arrow"]} />
      </div>
      <div className={classes["other-sports"]}>
        {categories.map((item, index) => (
          <p
            onClick={() => {
              changeSportCategory(item);
            }}
            key={index}
            className={
              item === sportCategory
                ? classes["sport-list-selected"]
                : classes["sport"]
            }
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Filter;
