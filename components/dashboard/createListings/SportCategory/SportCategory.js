"use client";
import React, { useState } from "react";
import classes from "./sportCategory.module.css";
const SportCategory = () => {
  const categories = [
    "Football",
    "Basketball",
    "NFL",
    "Boxing",
    "Others",
    "Netball",
    "Volleyball",
    "Tennis",
    "WWE",
    "F1",
    "Baseball",
    "Nascar",
    "Darts",
    "Cricket",
    "Hockey",
    "HorseRacing",
    "Rugby",
    "Tabletennis",
  ];
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className={classes["sport-category"]}>
      <h2 className={classes["title"]}>Sport Category</h2>
      <div className={classes["categories"]}>
        {categories.map((item, index) => (
          <div
            onClick={() => {
              setSelectedCategory(item);
              console.log(selectedCategory);
            }}
            key={index}
            className={classes["category"]}
          >
            <p>{item}</p>
            <span
              style={{
                background: selectedCategory == item ? "#007BFF" : "",
                outline: selectedCategory == item ? "2px solid #007BFF" : "",
                outlineOffset: selectedCategory == item ? "3px" : "",
              }}
              className={classes["check"]}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportCategory;
