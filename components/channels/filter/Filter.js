import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./filter.module.css";
const Filter = ({ allLanguages, handleFilter, filterValue }) => {
  return (
    <div className={classes["container"]}>
      <p className={classes["item"]}>All</p>
      <MdOutlineKeyboardArrowDown className={classes["arrow"]} />
    </div>
  );
};

export default Filter;
