import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import classes from "./table.module.css";
const Table = () => {
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <p className={classes["table-cell"]}>No</p>
        <p className={classes["table-cell"]}>Feedback Message</p>
        <p className={classes["table-cell"]}>Flag</p>
        <p className={classes["table-cell"]}>Date/Time</p>
      </div>
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div key={index} className={classes["table-row"]}>
          <p className={classes["table-cell"]}>533</p>
          <p className={classes["table-cell"]}>
            Our planet is in danger. The food system is depleting our soils,
            changing our climate and driving biodiversity loss. Poorer
            communities at home and in the Global South are bearing the brunt of
            the destruction wreaked by agribusiness corporations. But it
            doesn&#39; t have to be like this.
          </p>
          <div className={classes["flag"]}>
            <BsFlagFill />
          </div>
          <div className={classes["date-and-time"]}>
            <p>12/07/23</p>
            <p>23:12</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
