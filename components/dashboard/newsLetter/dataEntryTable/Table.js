import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./table.module.css";
const Table = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
        <button className={classes["download-button"]}>Download Emails</button>
      </div>
      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>ID</p>
        <p className={classes["table-cell"]}>Full Name</p>
        <p className={classes["status"]}>Email</p>
        <p className={classes["table-cell"]}>Date </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <span className={classes["square"]}></span>
          <p className={classes["table-cell"]}>1</p>
          <p className={classes["table-cell"]}>Humaid Al Balushi</p>
          <p className={classes["table-cell"]}>humaid123@gmail.com</p>
          <p className={classes["table-cell"]}>23/04/2023</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
