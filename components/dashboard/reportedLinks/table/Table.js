import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./table.module.css";
const Table = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <p className={classes["table-cell"]}>No</p>
        <p className={classes["table-cell"]}>Event</p>
        <p className={classes["table-cell"]}>Server</p>
        <p className={classes["table-cell"]}>Reason</p>
        <p className={classes["table-cell"]}>Date/Time</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <p className={classes["table-cell"]}>{index + 1}</p>
          <p className={classes["table-cell"]}>Man Utd vs Liverpool</p>
          <p className={classes["table-cell"]}>English 1</p>
          <p className={classes["table-cell"]}>Wrong Match</p>
          <div className={classes["date-and-time"]}>
            <p>12/07/23</p>
            <p>23:12</p>
          </div>
          <button className={classes["edit-button"]}>Edit </button>
        </div>
      ))}
    </div>
  );
};

export default Table;
