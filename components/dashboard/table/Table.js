"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import classes from "./table.module.css";
const Table = () => {
  const router = useRouter();
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <span></span>
        <p className={classes["table-cell"]}>ID</p>
        <p className={classes["table-cell"]}>Team 1</p>
        <p className={classes["table-cell"]}>Team 2</p>
        <p className={classes["table-cell"]}>League</p>
        <p className={classes["table-cell"]}>Date/Time</p>
        <p className={classes["table-cell"]}>Sport</p>
        <p className={classes["table-cell"]}>Hot Match</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <input type="checkbox" className={classes["checkbox"]} />
          <p className={classes["table-cell"]}>{item}</p>
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
          <button
            onClick={() => {
              router.push("/dashboard/sports-listings/edit");
            }}
            className={classes["edit-button"]}
          >
            Edit{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Table;
