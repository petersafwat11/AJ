"use client";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import classes from "./Dropdown.module.css";
const Dropdown = ({ name, options, selectOption, selectedOption }) => {
  console.log(name, "name");
  return (
    <div className={classes["dropdown"]}>
      <div
        className={
          name !== selectedOption.name ? classes["name"] : classes["name-2"]
        }
      >
        <p
          style={{
            fontFamily: name === "العربية" ? "Noto Sans Arabic" : "",
          }}
          className={classes["lang-name"]}
        >
          {name}
        </p>
        <IoIosArrowUp className={classes["drop-icon"]} />
      </div>
      <div className={classes["options"]}>
        <div className={classes["space"]}></div>
        {options.map((item, index) => (
          <p
            onClick={() => {
              selectOption({ index: index, name: name });
            }}
            // style={{

            // }}
            className={
              selectedOption.index == index && selectedOption.name == name
                ? classes["option-2"]
                : classes["option"]
            }
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
