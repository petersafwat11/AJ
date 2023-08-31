"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";

import EditButton from "../../editButton/EditButton";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";

const Table = ({ streamLinks, selectElement, paginations, dispatchDetail }) => {
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
        <p className={classes["table-cell"]}>Linked</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {streamLinks?.length > 0 ? (
        streamLinks.map((item, index) => (
          <div key={item._id} className={classes["table-row"]}>
            <input
              onClick={() => {
                selectElement(item._id);
              }}
              type="checkbox"
              className={classes["checkbox"]}
            />
            <p className={classes["table-cell"]}>{index}</p>
            <p className={classes["table-cell"]}>{item.channelName}</p>
            <p className={classes["table-cell"]}>
              {item.URL && item.RMTPKey ? "yes" : "no"}
            </p>
            <EditButton id={item._id} />
          </div>
        ))
      ) : (
        <NoContent />
      )}
      <Paginations
        rowsPerPage={paginations.rowsPerPage}
        results={paginations.results}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Table;
