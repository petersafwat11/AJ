"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import classes from "./filter.module.css";
const Filter = ({ options, handleFilter, filterValue, channels }) => {
  const router = useRouter();
  return (
    <div className={classes["container"]}>
      <div className={classes["selected"]}>
        <p className={classes["selected-sport"]}>{filterValue}</p>
        <MdOutlineKeyboardArrowDown className={classes["arrow"]} />
      </div>
      <div className={classes["other-sports"]}>
        {options.map((item, index) => (
          <p
            onClick={() => {
              if (channels) {
                handleFilter(item);
              } else {
                router.push(`/currentEvents/${item.toLowerCase()}`);
              }
            }}
            key={index}
            className={
              item === filterValue
                ? classes["sport-list-selected"]
                : classes["sport"]
            }
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Filter;
