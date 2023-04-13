import React from "react";
import classes from "./table.module.css";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import { BsFlagFill } from "react-icons/bs";
const Table = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>ID</p>
        <p className={classes["table-cell"]}>Team 1</p>
        <p className={classes["table-cell"]}>Team 2</p>
        <p className={classes["table-cell"]}>League</p>
        <p className={classes["table-cell"]}>Date/Time</p>
        <p className={classes["table-cell"]}>Sport</p>
        <p className={classes["table-cell"]}>Hot Match</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <span className={classes["square"]}></span>
          <p className={classes["table-cell"]}>ID</p>
          <p className={classes["table-cell"]}>Man Utd</p>
          <p className={classes["table-cell"]}>Liverpool</p>
          <p className={classes["table-cell"]}>Premier League</p>
          <div className={classes["date-and-time"]}>
            <p>12/07/23</p>
            <p>23:12</p>
          </div>
          <p className={classes["table-cell"]}>Football</p>
          <div className={classes["flag"]}>
            <BsFlagFill />
          </div>
          <button className={classes["edit-button"]}>Edit </button>
        </div>
      ))}
    </div>
  );
};

export default Table;
