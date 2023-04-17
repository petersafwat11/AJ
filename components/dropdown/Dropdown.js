"use client";
import Image from "next/image";
import React from "react";
import classes from "./Dropdown.module.css";
const Dropdown = ({ name, options, selectOption, selectedOption }) => {
  console.log(name, "name");
  return (
    <div className={classes["dropdown"]}>
      <div
        style={{
          fontFamily: name === "arabic" ? "Noto Sans Arabic" : "",
          background: name === selectedOption.name ? "#fe4747" : "",
        }}
        className={classes["name"]}
      >
        {name}
        <Image
          className={classes["drop-icon"]}
          src="/svg/chat/down-arrow.svg"
          alt="arrow"
          height="11"
          width="11"
        />
      </div>
      <div className={classes["options"]}>
        <div className={classes["space"]}></div>
        {options.map((item, index) => (
          <p
            onClick={() => {
              selectOption({ index: index, name: name });
            }}
            style={{
              backgroundColor:
                selectedOption.index == index && selectedOption.name == name
                  ? "rgb(254, 71, 71)"
                  : "",
              color:
                selectedOption.index == index && selectedOption.name == name
                  ? "rgba(255, 255, 255, 0.8)"
                  : "",
            }}
            className={classes["option"]}
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
