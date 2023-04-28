"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { RiArrowDownSLine } from "react-icons/ri";
import classes from "./timezoneDropdown.module.css";
const TimezoneDropdown = () => {
  const [timezone, setTimezone] = useState("GMT+0");
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className={classes["container"]}>
      <p className={classes["selected-timezone"]}>Timezone: {timezone} </p>
      <RiArrowDownSLine className={classes["arrow"]} />
      <div className={classes["wrapper"]}>
        <div className={classes["space"]}></div>

        <div className={classes["dropdown"]}>
          <div className={classes["search"]}>
            <input
              type="text"
              className={classes["search-input"]}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <GoSearch className={classes["search-icon"]} />
          </div>
          <div className={classes["options"]}>
            {[1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map(
              (timezone, index) => (
                <p
                  onClick={() => {
                    setTimezone(`GMT+${index + 1}`);
                  }}
                  className={classes["option"]}
                  key={index}
                >
                  Berlin, Germany (GMT+{index + 1}:00)
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimezoneDropdown;
