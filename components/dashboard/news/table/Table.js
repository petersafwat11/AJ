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
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}> ID</p>
        <p className={classes["table-cell"]}>Title</p>
        <p className={classes["table-cell"]}>Date</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <span className={classes["square"]}></span>
          <p className={classes["table-cell"]}>1</p>
          <p className={classes["table-cell"]}>2022 Highlights of week 2</p>
          <p className={classes["table-cell"]}>23/01/2022</p>
          <button className={classes["edit-button"]}>Edit </button>
        </div>
      ))}
    </div>
  );
};

export default Table;
