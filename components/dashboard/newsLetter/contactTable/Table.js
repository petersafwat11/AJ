"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { convertDate } from "../../../../utils/convertDateFormat";
import classes from "./table.module.css";
import Paginations from "../../paginations/Paginations";
import Flag from "../../flag/Flag";
const ContactTable = ({
  tableData,
  paginations,
  dispatchDetail,
  reverseFlagProp
}) => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <p className={classes["table-cell"]}>Email</p>
        <p className={classes["table-cell"]}> Message</p>
        <p className={classes["table-cell"]}>Flag</p>
        <p className={classes["table-cell"]}>Date/Time</p>
      </div>
      {tableData.map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <p className={classes["table-cell"]}>{item.email}</p>
          <p className={classes["table-cell"]}>{item.message}</p>
          <Flag
            reverseFlagProp={reverseFlagProp}
            id={item._id}
            flagged={item.flagged}
          />
          <div className={classes["date-and-time"]}>
            <p> {convertDate(item.createdAt).formattedDate}</p>
            <p> {convertDate(item.createdAt).formattedTime}</p>
          </div>
        </div>
      ))}
      <Paginations
        rowsPerPage={paginations.rowsPerPage}
        results={paginations.results}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default ContactTable;
