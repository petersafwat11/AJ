"use client";
import React from "react";

import EditButton from "../../editButton/EditButton";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import Search from "../../search/Search";
import classes from "./table.module.css";
const Table = ({
  channels,
  selectElement,
  paginations,
  dispatchDetail,
  seacrhValue,
  handleSearch,
}) => {
  return (
    <div className={classes["table"]}>
      <div className="search-div">
        <Search seacrhValue={seacrhValue} handleSearch={handleSearch} />
      </div>
      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>ID</p>
        <p className={classes["table-cell"]}>Channel Name</p>
        <p className={classes["table-cell"]}>Status</p>
        <p className={classes["table-cell"]}>Action </p>
      </div>
      {channels?.length > 0 ? (
        channels.map((item, index) => (
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
            <p className={classes["table-cell"]}>{item.mode}</p>
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
