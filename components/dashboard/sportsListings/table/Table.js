"use client";
import { useRouter } from "next/navigation";
import React from "react";

import { BiSearch } from "react-icons/bi";
import { convertDate } from "../../../../utils/convertDateFormat";
import Checkbox from "../../checkbox/Checkbox";
import EditButton from "../../editButton/EditButton";
import Flag from "../../flag/Flag";
import NoContent from "../../noContent/NoContent";
import Paginations from "../../paginations/Paginations";
import classes from "./table.module.css";
const Table = ({
  reverseFlagProp,
  sports,
  selectElement,
  paginations,
  dispatchDetail,
}) => {
  const router = useRouter();
  return (
    <div className={classes["table"]}>
      <div className={classes["search-wrapper"]}>
        <input className={classes["search"]} type="text" placeholder="Search" />
        <BiSearch className={classes["search-icon"]} />
      </div>
      <div className={classes["table-header"]}>
        <span className={classes["square"]}></span>
        <p className={classes["table-cell"]}>ID</p>
        <p className={classes["table-cell"]}>Team 1</p>
        <p className={classes["table-cell"]}>Team 2</p>
        <p className={classes["table-cell"]}>League</p>
        <p className={classes["table-cell"]}>Date/Time</p>
        <p className={classes["table-cell"]}>Sport</p>
        <p className={classes["table-cell"]}>Hot Match</p>
        <p className={classes["table-cell"]}>Action </p>
        {sports?.length > 0 && <p>servers</p>}
      </div>
      {sports?.length > 0 ? (
        sports.map((item, index) => (
          <div key={item._id} className={classes["table-row"]}>
            <Checkbox selectElement={selectElement} id={item._id} />
            <p className={classes["table-cell"]}>{index + 1}</p>
            <p className={classes["table-cell"]}>{item.firstTeamName}</p>
            <p className={classes["table-cell"]}>{item.secondTeamName}</p>
            <p className={classes["table-cell"]}>{item.eventLeague}</p>
            <div className={classes["date-and-time"]}>
              <p> {convertDate(item.removeCountdown).formattedDate}</p>
              <p> {convertDate(item.removeCountdown).formattedTime}</p>
            </div>
            <p className={classes["table-cell"]}>{item.sportCategory}</p>
            <Flag
              reverseFlagProp={reverseFlagProp}
              id={item._id}
              flagged={item.flagged}
            />
            <EditButton id={item._id} />
            {/* <div className={classes["severs"]}> */}
            <p
              onClick={() => {
                router.push(`/dashboard/servers/${item._id}`);
              }}
              className={classes["severs"]}
            >
              servers{" "}
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
