import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import classes from "./showMore.module.css";
const ShowMore = ({ showMoreHandeler }) => {
  return (
    <div onClick={showMoreHandeler} className={classes["container"]}>
      Show more
      <div className={classes["arrow-wrapper"]}>
        <RiArrowDownSLine className={classes["arrow"]} />
      </div>
    </div>
  );
};

export default ShowMore;
