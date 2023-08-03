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
            }}
            key={index}
            className={classes["category"]}
          >
            <p>{item}</p>
            <span
              className={classes[selectedCategory == item ? "not-checked": 'checked']}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportCategory;
