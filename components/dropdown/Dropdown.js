"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import classes from "./Dropdown.module.css";
const Dropdown = ({ name, options }) => {
  // const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
  console.log(options);
  return (
    <div
      ref={dropdownRef}
      className={classes["dropdown"]}
      onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
      onMouseLeave={closeHoverMenu}
    >
      <div
        // onClick={() => {
        //   setShowOptions(!showOptions);
        // }}
        className={classes["name"]}
      >
        {name}{" "}
        <Image
          className={classes["drop-icon"]}
          src="/svg/chat/down-arrow.svg"
          alt="arrow"
          height="14"
          width="14"
        />{" "}
      </div>
      <div>
        {isMenuDropDownOpen && (
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
    </div>
  );
};

export default Dropdown;
