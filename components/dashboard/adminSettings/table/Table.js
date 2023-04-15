import React from "react";
import { BiSearch } from "react-icons/bi";
import classes from "./table.module.css";
const Table = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
        <div className={classes["delete-button"]}>Delete</div>
      </div>

      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>Ticket ID</p>
        <p className={classes["table-cell"]}>Email</p>
        <p className={classes["status"]}>Display Name</p>
        <p className={classes["table-cell"]}>Role </p>

        <p className={classes["table-cell"]}>Action </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <span className={classes["square"]}></span>
          <p className={classes["table-cell"]}>1</p>
          <p className={classes["table-cell"]}>
            thedefaultmermaidgirl@protonmail.com
          </p>
          <p className={classes["status"]}>AJ Sports Admin (Adam)</p>
          <p className={classes["table-cell"]}>Admin</p>

          <button className={classes["edit-button"]}>Edit </button>
        </div>
      ))}
    </div>
  );
};

export default Table;
