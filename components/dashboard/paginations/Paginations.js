import React from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropdown,
} from "react-icons/io";
import classes from "./paginations.module.css";
const Paginations = ({ rowsPerPage, results, dispatchDetail }) => {
  return (
    <div className={classes["container"]}>
      <p className={classes["rows-num"]}>Rows per page: {rowsPerPage}</p>
      <div className={classes["arrow-wrapper"]}>
        <IoMdArrowDropdown className={classes["arrow-down"]} />

        <div className={classes["rows-options"]}>
          <span className={classes["devider"]}></span>
          {[10, 15, 20].map((num, index) => (
            <p
              onClick={() => {
                dispatchDetail({ type: "ROW", value: num });
              }}
              key={index}
              className={classes["option"]}
            >
              {num}
            </p>
          ))}
        </div>
      </div>
      <p className={classes["results-num"]}>
        1-
        {rowsPerPage && results && results > rowsPerPage
          ? rowsPerPage
          : results < rowsPerPage
          ? results
          : 10}
        of {results || 276}
      </p>
      <div className={classes["controllers"]}>
        <IoIosArrowBack
          onClick={() => {
            dispatchDetail({ type: "BACK" });
          }}
        />
        <IoIosArrowForward
          onClick={() => {
            dispatchDetail({ type: "FORWARD" });
          }}
        />
      </div>
    </div>
  );
};

export default Paginations;
