"use client";
import Image from "next/image";
import React, { useState } from "react";
import classes from "./Dropdown.module.css";
const Dropdown = ({ name, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  console.log(options);
  return (
    <div className={classes["dropdown"]}>
      <div
        onClick={() => {
          setShowOptions(!showOptions);
        }}
        className={classes["name"]}
      >
        {name}{" "}
        <Image
          src="/svg/watch/down-arrow.svg"
          alt="arrow"
          height="14"
          width="14"
        />{" "}
      </div>

      {showOptions && (
        <div className={classes["options"]}>
          {options.map((item, index) => (
            <p
              onClick={() => {
                setSelectedOption(index);
              }}
              style={{
                backgroundColor:
                  selectedOption == index ? "rgb(254, 71, 71, 0.6)" : "",
                color:
                  selectedOption == index ? "rgba(255, 255, 255, 0.8)" : "",
              }}
              className={classes["option"]}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
