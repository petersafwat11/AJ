import React from "react";
import { BiSearch } from "react-icons/bi";
import { convertDate } from "../../../../utils/convertDateFormat";
import Checkbox from "../../checkbox/Checkbox";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
const Table = ({ followers, selectElement, paginations, dispatchDetail }) => {
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
        <p className={classes["status"]}>Method</p>
        <p className={classes["table-cell"]}>Date </p>
      </div>
      {followers?.length > 0 ? (
        followers.map((item, index) => (
          <div key={item._id} className={classes["table-row"]}>
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{index + 1}</p>
            <p className={classes["table-cell"]}>{item.fullName}</p>
            <p className={classes["table-cell"]}>{item.email}</p>
            <p className={classes["table-cell"]}>{item.method}</p>
            <div className={classes["date-and-time"]}>
              <p> {convertDate(item.createdAt).date}</p>
              {/* <p> {convertDate(item.createdAt).time}</p> */}
            </div>
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
