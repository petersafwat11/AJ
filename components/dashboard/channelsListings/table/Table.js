import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./table.module.css";
const Table = ({ status }) => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>ID</p>
        <p className={classes["table-cell"]}>Channel Name</p>
        <p className={classes["status"]}>{status ? status : "Status"}</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <span className={classes["square"]}></span>
          <p className={classes["table-cell"]}>ID</p>
          <p className={classes["table-cell"]}>Sky Sports Main Event 4k</p>
          <p className={classes["status"]}>{status ? "Yes" : "Visible"}</p>
          <button className={classes["edit-button"]}>Edit </button>
        </div>
      ))}
    </div>
  );
};

export default Table;
