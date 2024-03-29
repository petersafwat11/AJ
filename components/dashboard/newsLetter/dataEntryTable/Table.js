import React from "react";
import { BiSearch } from "react-icons/bi";
import { convertDate } from "../../../../utils/convertDateFormat";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
import Checkbox from "../../checkbox/Checkbox";
const Table = ({
  newsLetter,
  selectElement,
  paginations,
  dispatchDetail,
}) => {
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
        {/* <p className={classes["table-cell"]}>Full Name</p> */}
        <p className={classes["status"]}>Email</p>
        <p className={classes["table-cell"]}>Date </p>
      </div>
      {newsLetter?.length > 0 ? (
        newsLetter?.map((item, index) => (
          <div key={index} className={classes["table-row"]}>
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{item.num}</p>
            <p className={classes["table-cell"]}>{item.email}</p>
            <p className={classes["table-cell"]}>
              {convertDate(item.createdAt).date}
            </p>
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
